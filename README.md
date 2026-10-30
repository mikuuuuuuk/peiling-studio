# Miku Studio — A living collection

A Three.js spatial portfolio. One continuous book room contains the SILLAGE, AFTERIMAGE and YGM App storytelling exhibits, plus a project-brief area.

Run `npm install` then `npm run build`; serve this folder with a static server. `src/world.js` is bundled to the tracked `world.js`. Hosting remains at the existing GitHub Pages URL.

Interactions: hinged book cover and bending paper geometry, camera travel, raycast exhibit selection, spring-return specimen dragging, animated halo shader, petals, dust, cursor particle trail, index and keyboard navigation. Mobile uses lower pixel ratio and static lighting shadows are omitted on coarse pointers. Motion can be toggled, and reduced-motion preference is respected.

The brief form downloads text locally and sends nothing. The YGM exhibit opens `ygm/`, a ten-language App introduction with a four-chapter Three.js story, interactive growth sculpture, feature narratives and research sources. App downloads remain a coming-soon state until real store links are available. The portfolio contains no health-record service or personal health data.

## Opening complete project websites

The “作品網站” menu offers native new-tab links to SILLAGE, AFTERIMAGE and YGM without requiring the 3D tour. In each project room, “開啟完整網站” is the primary action; the design notes remain available as the secondary button. Clicking the current project's framed preview also opens its website; dragging an object retains the original interaction. The no-WebGL fallback includes direct links to all three projects.

Verified locally in Chromium: each menu link reached its correct complete website in a new tab, YGM's main CTA opened its rendered 3D page, design notes still toggled, and the 390px menu had no horizontal overflow.
