# remotion-stutter-repro

Minimal reproduction of frame drops in the Remotion Studio player when cycling between `<Video>` elements.

## The bug

A composition cycles through 3 looping video clips (switching every 45 frames). Each transition causes a visible stutter/frame drop in the player. Background music plays throughout.

## Setup

```bash
pnpm install
pnpm studio
```

Press play and watch the transitions between clips.
