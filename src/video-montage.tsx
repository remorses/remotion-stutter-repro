/**
 * VideoMontage — plain Remotion reproduction of bible-montage/video-clips.mdx.
 *
 * Cycles through 3 video clips (45 frames each) with a continuous zoom.
 * Each clip has a blurred raw-frame PNG as background. This reproduces
 * the exact same rendering pattern that stutters in the Remotion player.
 */
import { useCurrentFrame, useVideoConfig, AbsoluteFill, Img, staticFile } from 'remotion'
import { Audio, Video } from '@remotion/media'
import { interpolate } from 'remotion'

const VIDEO_CLIPS = Array.from({ length: 3 }, (_, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return staticFile(`videos/animated-${idx}.mp4`)
})

const RAW_FRAMES = Array.from({ length: 3 }, (_, i) => {
  const idx = String(i + 1).padStart(2, '0')
  return staticFile(`raw-frames/frame-${idx}.png`)
})

export const VideoMontage = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const clipDuration = 45
  const currentIndex = Math.floor(frame / clipDuration) % VIDEO_CLIPS.length

  // Continuous zoom across entire duration
  const scale = interpolate(frame, [0, durationInFrames], [1, 1.5])
  const s = Math.round(scale * 1000) / 1000

  return (
    <AbsoluteFill>
      {/* Background music */}
      <Audio src={staticFile('locrian.mp3')} startFrom={65 * 30} volume={0.3} />

      {/* Raw frame as blurred background */}
      <AbsoluteFill>
        <Img
          src={RAW_FRAMES[currentIndex]}
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
          src={VIDEO_CLIPS[currentIndex]}
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
