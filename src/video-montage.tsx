/**
 * VideoMontage — plain Remotion reproduction of bible-montage/video-clips.mdx.
 *
 * Cycles through 3 video clips (45 frames each) with a continuous zoom.
 * Each clip has a blurred raw-frame PNG as background.
 *
 * Uses <Series> so each clip is its own <Series.Sequence> with a dedicated
 * <Video> element, instead of swapping src on a single element.
 */
import { useCurrentFrame, useVideoConfig, AbsoluteFill, Img, staticFile, Series } from 'remotion'
import { Audio, Video } from '@remotion/media'
import { interpolate } from 'remotion'

const CLIP_COUNT = 3
const CLIP_DURATION = 45

const VIDEO_CLIPS = Array.from({ length: CLIP_COUNT }, (_, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return staticFile(`videos/animated-${idx}.mp4`)
})

const RAW_FRAMES = Array.from({ length: CLIP_COUNT }, (_, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return staticFile(`raw-frames/frame-${idx}.png`)
})

function ClipSegment({ clipIndex }: { clipIndex: number }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  // Compute absolute frame for continuous zoom (Series resets useCurrentFrame per sequence)
  // We receive clipIndex to know our position in the overall timeline
  const absoluteFrame = clipIndex * CLIP_DURATION + frame

  const totalDuration = 30 * fps
  const scale = interpolate(absoluteFrame, [0, totalDuration], [1, 1.5])
  const s = Math.round(scale * 1000) / 1000

  const srcIndex = clipIndex % CLIP_COUNT

  return (
    <AbsoluteFill>
      {/* Raw frame as blurred background */}
      <AbsoluteFill>
        <Img
          src={RAW_FRAMES[srcIndex]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(20px) brightness(0.4)',
            transform: `scale(${Math.round(1.1 * s * 1000) / 1000})`,
            willChange: 'transform',
          }}
        />
      </AbsoluteFill>

      {/* Animated video clip */}
      <AbsoluteFill
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Video
          src={VIDEO_CLIPS[srcIndex]}
          muted
          loop
          style={{
            maxWidth: '90%',
            maxHeight: '90%',
            transform: `scale(${s})`,
            willChange: 'transform',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  )
}

export const VideoMontage = () => {
  const { durationInFrames } = useVideoConfig()

  // Fill the entire duration with clip sequences
  const sequenceCount = Math.ceil(durationInFrames / CLIP_DURATION)

  return (
    <AbsoluteFill>
      {/* Background music */}
      <Audio src={staticFile('locrian.mp3')} startFrom={65 * 30} volume={0.3} />

      <Series>
        {Array.from({ length: sequenceCount }, (_, i) => (
          <Series.Sequence key={i} durationInFrames={CLIP_DURATION}>
            <ClipSegment clipIndex={i} />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  )
}
