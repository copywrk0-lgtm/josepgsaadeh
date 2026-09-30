# Joseph Saadeh — Photography & Film Concept

A standalone photography website concept for Joseph Saadeh, adapted from the supplied Royal Frame Stories project.

## Run

```sh
npm ci
npm run build
npm run preview
```

Vercel builds the site with `npm run build` and publishes `dist`.

## Content

- Interactive camera introduction and linked filmstrip
- Four story galleries containing 20 supplied photographs
- Wedding and baptism collections
- Four supplied films with muted preview loops and full playback
- About page and an email enquiry composer

All portfolio photographs and films are from the Joseph Saadeh uploads supplied by Aayush on 30 September 2026. The former sample photography and films have been removed. The original uploads are unchanged. Optimised website copies and their source filenames are recorded in `media-sources.json`.

Two wedding reels arrived with sideways footage. Their website copies are rotated upright for landscape viewing. The baptism reels retain their original portrait orientation. The white borders and photographic collages in the supplied photos are preserved.

Story titles describe the photographs. No client names, dates, venues, testimonials, or biography details have been invented. The "Wedding moments" gallery is a selection from different shoots. Food and event pages link to Joseph's current portfolio because no images from those categories were supplied. The About image is his photography, not a portrait of Joseph.

This remains a concept by Copywrk, with `noindex,nofollow` until approved for launch. The enquiry form prepares a message for the visitor's email app; it does not send messages automatically.

## Edit

Home markup: `dist/index.html`; CSS: `dist/style.css`; interactions: `src/main.js`; story and film data: `src/stories.js`; inner-page templates: `generate-stories.mjs`.
