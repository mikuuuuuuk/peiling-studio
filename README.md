# Miku Studio — A living collection

A Three.js spatial portfolio. One continuous book room contains the SILLAGE, AFTERIMAGE and warm/orange YGM exhibits, plus a project-brief area.

Run `npm install` then `npm run build`; serve this folder with a static server. `src/world.js` is bundled to the tracked `world.js`. Hosting remains at the existing GitHub Pages URL.

Interactions: hinged book cover and bending paper geometry, camera travel, raycast exhibit selection, spring-return specimen dragging, animated halo shader, petals, dust, cursor particle trail, index and keyboard navigation. Mobile uses lower pixel ratio and static lighting shadows are omitted on coarse pointers. Motion can be toggled, and reduced-motion preference is respected.

The brief form downloads text locally and sends nothing. YGM is a design case study, not a public health-record application. Its actual orange workspace is maintained in the parent project (`templates/ygm_integrated.html`). No user health data is bundled.
