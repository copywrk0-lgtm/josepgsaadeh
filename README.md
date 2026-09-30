# Joseph Saadeh — Photography & Film concept

Standalone adaptation of the supplied Royal / Frame Stories project. MJ Royal and the original ZIP are unchanged.

## Preview

Run `npm ci`, then `npm run build` and `npm run preview`. Open http://localhost:8000. The ZIP also includes the built `dist` folder, which can be served immediately or deployed to a static host. Serve over HTTP; do not open index.html as a file.

## Included

- Scroll-driven 3D camera with static fallback
- Interactive film strip and five standalone sample story pages
- Four video previews with animated, accessible playback dialog
- Weddings, Baptisms, Events and Food collection pages
- About page, verified public contact links and an enquiry message composer
- Responsive layouts, reduced-motion behavior and 404 page

## Media and launch status

This is a concept, not an official website. All photos and video files are sample assets retained from the supplied ZIP; they must not be presented as Joseph's work. His public Pixieset portfolio was blocked during preparation, so his photos, films and portrait could not be imported. Baptism, Event and Food collection pages point to his current work rather than showing mismatched sample images. Replace these with Joseph's selections before pitching it as his portfolio. Pages intentionally use noindex/nofollow until approved for launch.

Public identity/services and phone were checked against https://www.instagram.com/josephsaadeh.photography/ ; email and portfolio against https://www.facebook.com/josephsaadeh.photography/ . Personal biography, testimonials, prices, venue names and client identities are not invented.

The enquiry form prepares a message and opens the visitor's email client only when they choose that action. The visitor must press Send in their email client; there is no submission backend. No outreach message has been sent.

## Editing

Home markup: `dist/index.html`; CSS: `dist/style.css`; interactions: `src/main.js`; sample story and film metadata: `src/stories.js`; inner-page templates: `generate-stories.mjs`. Run `npm run build` after source/template edits. Deploy the contents of `dist`, with trailing-slash URLs supported by your host.

The 3D camera and media retain their original provenance from the supplied project. Confirm asset permissions before public launch.
