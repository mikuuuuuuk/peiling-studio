# Miku Studio spatial portfolio — 2026-10-25

## Implementation
- One continuous Three.js book room with a hinged cover, deforming page meshes and camera transitions.
- Three physical exhibits for SILLAGE, AFTERIMAGE and the confirmed warm/orange multilingual YGM marketing homepage; a fourth area for project briefs.
- Spring-return specimen dragging via raycast/view-plane intersection; scene look dragging, animated petals, portal shader, dust, cursor particles, index and keyboard navigation.
- Rounded edges, profiled plinths, procedural book cloth/paper, brushed metal, contact-shadow textures, CC0 Poly Haven PBR surface textures and studio HDR lighting. Assets self-hosted.
- YGM is represented by a design screenshot, without actual user records. No operational health service is hosted in this portfolio.

## Checks
- Build with esbuild, Three.js 0.180.0; node syntax check passed.
- Browser checked in observed desktop 1280px and narrow 586px layouts; no horizontal overflow in narrow layout. Viewport override was unreliable in this IAB session, so no claim of verified 390px device behavior.
- Book entry, camera travel, chapter controls, draggable bottle hit target, story panel and material loading exercised. Browser warning/error logs empty after HDR/material load.
- Physical phone performance and real-device drag behavior not verified.
- Contact brief downloads locally; it does not submit data.
- Some browser-control observations timed out during this session, later recovered. This is not evidence of a measured site FPS value. No 60fps guarantee is made.

## Hosting
Existing public GitHub Pages repository and URL retained. Brand name is Miku Studio.
