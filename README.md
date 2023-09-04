# z80cim-site

This repository contains the sources to the z80cim.org site.

The site includes the following features:

* JavaScript (es2020)
* [Sveltekit](https://kit.svelte.dev/docs)
* [Svelte](https://svelte.dev/)
* [Tailwind CSS](https://tailwindcss.com/docs/installation)
* [PostCSS](https://postcss.org/docs/)
* [Husky](https://typicode.github.io/husky/)
* [Storybook](https://storybook.js.org/docs/svelte/get-started/install)
* [Vitest](https://vitest.dev/guide/)


## Developing

Install dependencies with `npm install`.

To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

The site is currently static with all page prerendered.

The contents of the `build` directory are `rsync`'d with the production system.
A very non-google scale process for a low-volume site.
