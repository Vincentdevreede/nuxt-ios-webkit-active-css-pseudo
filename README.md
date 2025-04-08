<p align="center">
  <a href="https://nuxterror.com/" target="_blank">
    <img src="https://nuxterror.com/logo.svg" alt="NuxtError" width="280" height="84">
  </a>
</p>

# 📱 Nuxt iOS WebKit `:active` CSS Pseudo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This simple, lightweight Nuxt module ⚙️ resolves a common issue in iOS WebKit browsers 📱: the `:active` CSS pseudo-class doesn’t function as expected without an explicit `touchstart` event ✋.

- **⚡ Effortless Fix**: A straightforward solution for the `:active` issue on iOS WebKit that just works.
- **📦 Minimal size**: It's lightweight and has no extra dependencies to worry about
- **🔧 Easy Integration**: Super simple to add to any existing project.

## 🛠️ Quick Setup

The fastest way to get started — Nuxt will install and configure the module for you automatically:

```bash
npx nuxi module add @vincentdevreede/nuxt-ios-webkit-active-css-pseudo
```
That’s it! You’re ready to go 🚀



## ⚡ Manual Installation

### 1. Install the module

```bash
# npm
npm install @vincentdevreede/nuxt-ios-webkit-active-css-pseudo

# yarn
yarn add @vincentdevreede/nuxt-ios-webkit-active-css-pseudo

# pnpm
pnpm add @vincentdevreede/nuxt-ios-webkit-active-css-pseudo
```

### 2. Add to modules in nuxt.config.ts:
```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    'nuxt-ios-webkit-active-css-pseudo'
  ]
});
```

## 🌍 JavaScript?
Not using Nuxt, just  good ol' HTML/CSS/JavaScript. Add this code to your JavaScript:
```javascript
document.addEventListener('touchstart', () => {}, { passive: true });
```

## 🤝 Contributing & Issues

Contributions are welcome! If you’ve got ideas or want to help out, feel free to open an issue or submit a pull request.
If you run into any problems, let me know by reporting them [here](https://github.com/Vincentdevreede/nuxt-ios-webkit-active-css-pseudo/issues).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@vincentdevreede/nuxt-ios-webkit-active-css-pseudo/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://www.npmjs.com/package/@vincentdevreede/nuxt-ios-webkit-active-css-pseudo

[npm-downloads-src]: https://img.shields.io/npm/dm/@vincentdevreede/nuxt-ios-webkit-active-css-pseudo.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@vincentdevreede/nuxt-ios-webkit-active-css-pseudo

[license-src]: https://img.shields.io/npm/l/@vincentdevreede/nuxt-ios-webkit-active-css-pseudo.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://github.com/Vincentdevreede/nuxt-ios-webkit-active-css-pseudo/blob/HEAD/LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com