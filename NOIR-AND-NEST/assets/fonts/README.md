# Typography System — NOIR & NEST

This project uses an editorial luxury typography pairing loaded via Google Fonts CDN:

1. **Heading Display Serif**:
   - Family: `Cormorant Garamond` (Weights: 300, 400, 500, 600, 700, Italic)
   - Fallbacks: `Garamond`, `Playfair Display`, `Didot`, `Georgia`, serif
   - Character: Evokes high-fashion editorial gastronomy, Michelin-starred heritage, and bespoke craftsmanship.

2. **Body & Interface Sans-Serif**:
   - Family: `Plus Jakarta Sans` (Weights: 300, 400, 500, 600, 700)
   - Fallbacks: `Inter`, system-ui, -apple-system, BlinkMacSystemFont, sans-serif
   - Character: High legibility in moody, dark-mode environments, clean letterforms, crisp numeric rendering for pricing and reservation inputs.

For offline self-hosted deployments, WOFF2 files can be placed directly into this `assets/fonts/` directory and referenced via `@font-face` rules.
