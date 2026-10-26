# YGM App introduction

A standalone multilingual App promotion page in the Miku Studio portfolio. It introduces the project and its features; it contains no assessment form, sample patient results or device mockups.

The opening story is a four-chapter Three.js film driven by scroll or the play control. One thick, curved petal sculpture opens through the chapters with camera travel, lighting, shadows, orbiting measurement beads and direct drag rotation. The closing section reuses the same sculpture. The palette is pale ivory, blush and champagne.

- `index.html`: semantic content and navigation.
- `content.js`: 10 complete locale dictionaries, research-method tabs and keyboard support.
- `spatial.css`: responsive layout, feature animation and reduced-motion treatment.
- `spatial-source.js`: original Three.js source; bundled into `spatial.js` by the parent `npm run build`.
- Locally hosted fonts and bundled Three.js require no third-party CDN at runtime.

App Store and Google Play destinations have not been supplied. The download area truthfully displays a coming-soon state; add real store links after release.

Verified in desktop Chromium: chapter navigation, play/pause with scroll advancement, visible 3D drag response, method tabs by click and keyboard, all 10 locales, 320–1440 px widths and reduced-motion chapter advance without autoplay. 320×667 controls remain visible. No JavaScript errors or missing assets observed. This is local browser verification, not testing on physical phones. No public deployment performed.

## Visibility, interaction and research update — 2026-10-26

- Hero sculpture starts partly open, with closer framing and a smaller pedestal. GPU viewport ends above the controls so it cannot paint over them.
- Added explicit bloom/close, explode/reassemble and auto-rotation controls; clicking the flower toggles its bloom, dragging rotates it and pointer movement shifts the key light.
- A sticky Three.js view accompanies the four feature descriptions, with a distinct bloom/layer state for each feature. Selection survives scroll settling; mobile selection positions text below the sculpture.
- Research-method tabs also control a 3D view. Playing or advancing the story resets manual layer overrides to preserve its intended sequence.
- Added original Mirwald (2002) and Moore (2015) source links and Kozieł & Malina independent validation (2018 journal issue). The evidence section distinguishes method literature from product clinical validation. Sources: https://pubmed.ncbi.nlm.nih.gov/11932580/ ; https://pubmed.ncbi.nlm.nih.gov/25423445/ ; https://pmc.ncbi.nlm.nih.gov/articles/PMC5752743/ . No product accuracy claim or institutional endorsement added.
- Local Chromium checks: new controls, feature selection, all ten additional translation sets, method-to-scene updates, three research links, 320/390/768/1440 px widths, long German/French/Portuguese tablet labels, and film reset. No observed JS errors. Reviewed desktop/mobile screenshots including the feature section. No public deployment performed.

## Overlap correction — 2026-10-26

The full-page GPU overlay was removed. A single offscreen Three.js renderer now presents each view into a canvas inside its own clipped DOM container. This makes it structurally impossible for the sculpture to paint onto neighboring copy or controls. Camera zoom fits the petal geometry to each local view; the hero pedestal is hidden to give more space to the flower itself. Desktop uses separate copy/sculpture columns. Mobile features use an inline sculpture above each description, without sticky overlays. The mobile hero calculates its available space from the actual translated chapter height.

Verified local Chromium viewport geometry at 1440×1000, 768×900, 390×844 and 320×667: no hero-copy/control intersection, no inline-feature/copy intersection, no page-wide canvas, and no horizontal overflow. All ten languages passed hero-zone checks. Rendered desktop and mobile captures reviewed; no JS errors observed. Existing text, source links and App download status are preserved.
