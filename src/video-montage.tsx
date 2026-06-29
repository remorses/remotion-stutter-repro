/**
 * VideoMontage — minimal stutter repro with hardcoded Series sequences.
 * No dynamic loops, no background images. Just 3 videos repeating in Series.
 */
import { AbsoluteFill, staticFile, Series } from 'remotion'
import { Audio, Video } from '@remotion/media'

export const VideoMontage = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile('locrian.mp3')} volume={0.3} />

      <Series>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-01.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-02.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-03.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-01.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-02.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-03.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-01.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-02.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-03.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-01.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-02.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-03.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-01.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-02.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-03.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-01.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-02.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-03.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-01.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <AbsoluteFill>
            <Video src={staticFile('videos/animated-02.mp4')} muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  )
}
