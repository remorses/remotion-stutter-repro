/**
 * Remotion root — registers the VideoMontage composition.
 * Reproduces the bible-montage video-clips.mdx pattern:
 * 18 video clips cycling every 45 frames with a continuous zoom,
 * blurred raw-frame backgrounds, 1080x1920 vertical, 30fps, 30s.
 */
import { Composition } from 'remotion'
import { VideoMontage } from './video-montage'

export const RemotionRoot = () => {
  return (
    <Composition
      id="VideoMontage"
      component={VideoMontage}
      durationInFrames={30 * 30}
      fps={30}
      width={1080}
      height={1920}
    />
  )
}
