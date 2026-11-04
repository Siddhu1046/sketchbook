# Siddhu's Sketchbook Portfolio
A handcrafted explorer-notebook portfolio built with React, TypeScript, Vite, Framer Motion and GSAP-ready architecture.

## Run locally
```bash
npm install
npm run dev
```

## Character video
Put your transparent character animation at `public/character.webm` (VP9 with alpha preferred). Optional MP4 fallback: `public/character.mp4`. The Skills section reads these paths and scrubs the video from scroll position. Until the video is added, the layout remains usable but the character area will be empty.

## Travel data
Visited destinations are maintained in `data/visitedPlaces.ts`. Badami trip date: 1 November 2026. Replace the stylized travel placeholders with your own photographs when ready.

## Deploy
Import this repository into Vercel or Netlify. Build command: `npm run build`; output directory: `dist`.
