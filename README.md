# revTendo Website

The official revTendo website.

## Layout

- `index.html` - console picker
- `3ds/`, `wiiu/` - per-console setup pages and progress pages
- `support/`, `faq/`, `staff/`
- `global/css/base.css` - shared design system
- `global/css/style.css`, `wiiu.css`, `3ds.css` - theme layers
- `global/functions/sfx.js` - console UI sounds
- `global/functions/progress.js` - computes progress from the lists
- `global/functions/api/news.js` - Cloudflare Pages function
- `global/functions/constants.js` - Holds important info for JS usage across pages
- `global/functions/navbar.js` - Navbar generation
- `global/functions/footer.js` - Footer generation

## Editing progress

Progress percentages are computed from `data-done="true|false"` on each
`.progress-list` item. Flip the attribute, the bar and the lamps update.

## Credits

Images: Somarix

Web: cannedfart, Adrian, Pinecone

Fixes: nebulagamez
