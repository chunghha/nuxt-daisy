# Nuxt 3 Starter with DaisyUI

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Initiate and install nuxt:

```bash
npx nuxi init nuxt-daisy
cd nuxt-daisy
yarn install
```

## Tailwindcss / DaisyUI

- Install @nuxtjs/tailwindcss and daisyui

```bash
yarn add --dev @nuxtjs/tailwindcss
yarn add --dev daisyui
```

- Add @nuxtjs/tailwindcss to your buildModules section in your nuxt.config:

```
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
```

```bash
npx tailwindcss init
```
- Add daisyUI to your tailwind.config.js

```
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```
