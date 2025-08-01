# cloudflare-react-router-vitest

Tries to add [workers vitest integration](https://developers.cloudflare.com/workers/testing/vitest-integration/) to the [react router cloudflare template](https://developers.cloudflare.com/workers/framework-guides/web-apps/react-router/).

```
pnpm test

mw@pool-108-46-252-142 cloudflare-react-router-vitest % pnpm test

> cloudflare-react-router-vitest@ test /Users/mw/Documents/src/cloudflare-react-router-vitest
> vitest run


 RUN  v3.2.4 /Users/mw/Documents/src/cloudflare-react-router-vitest

✘ [ERROR] The entry point "react" cannot be marked as external

Sourcemap for "/Users/mw/Documents/src/cloudflare-react-router-vitest/node_modules/.pnpm/@cloudflare+vitest-pool-workers@0.8.59_@vitest+runner@3.2.4_@vitest+snapshot@3.2.4_vite_29f9cbd058e57d453ac1718407aaef54/node_modules/@cloudflare/vitest-pool-workers/dist/pool/index.mjs" points to missing source files
Sourcemap for "/Users/mw/Documents/src/cloudflare-react-router-vitest/node_modules/.pnpm/miniflare@4.20250730.0/node_modules/miniflare/dist/src/index.js" points to missing source files

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Error: Build failed with 1 error:
error: The entry point "react" cannot be marked as external
 ❯ failureErrorWithLog node_modules/.pnpm/esbuild@0.25.8/node_modules/esbuild/lib/main.js:1467:15
 ❯ node_modules/.pnpm/esbuild@0.25.8/node_modules/esbuild/lib/main.js:926:25
 ❯ node_modules/.pnpm/esbuild@0.25.8/node_modules/esbuild/lib/main.js:1345:9
 ❯ processTicksAndRejections node:internal/process/task_queues:105:5

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: { errors: [ { detail: undefined, id: '', location: null, notes: [], pluginName: '', text: 'The entry point "react" cannot be marked as external' } ], warnings: [] }




 Test Files 0 passed (2)
      Tests 0 passed (0)
```

```
pnpm test1

mw@pool-108-46-252-142 cloudflare-react-router-vitest % pnpm test1

> cloudflare-react-router-vitest@ test1 /Users/mw/Documents/src/cloudflare-react-router-vitest
> vitest run --config vitest1.config.ts


 RUN  v3.2.4 /Users/mw/Documents/src/cloudflare-react-router-vitest

 ✓ tests/basic.test.ts (1 test) 1ms
 ✓ tests/app-fetch.test.ts (1 test) 253ms

 Test Files  2 passed (2)
      Tests  2 passed (2)
```

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Previewing the Production Build

Preview the production build locally:

```bash
npm run preview
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To build and deploy directly to production:

```sh
npm run deploy
```

To deploy a preview URL:

```sh
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
