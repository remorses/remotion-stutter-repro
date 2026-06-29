# remotion-stutter-repro

Minimal reproduction of frame drops in the Remotion Studio player when transitioning between `<Video>` elements in a `<Series>`.

## The bug

20 hardcoded `<Series.Sequence>` blocks cycle through 3 video clips (45 frames each). Each transition causes a visible stutter/frame drop in the player. No dynamic logic, no loops, no images; just `<Video>` elements with `objectFit: 'cover'`.

Stutters with both dynamic `src` swapping and static `<Series>` sequences.

## Setup

```bash
pnpm install
pnpm studio
```

Press play and watch the transitions between clips.

## Demo

https://github.com/remorses/remotion-stutter-repro/raw/main/stutter-demo.mp4
