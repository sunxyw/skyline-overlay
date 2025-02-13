<h1 align="center">
  <img src="https://raw.githubusercontent.com/dsrkafuu/skyline-overlay/main/assets/logo.svg" alt="Skyline Logo" width="128" /><br />
  Skyline Overlay
  <br />
</h1>

<h4 align="center">A horizon FFXIV miniparse overlay built with React & Vite.</h4>
<br />

![](https://img.shields.io/github/package-json/v/dsrkafuu/skyline-overlay)
![](https://img.shields.io/badge/ffxiv%20tested-5.5-orange)
![](https://img.shields.io/github/license/dsrkafuu/skyline-overlay)

An extended version from [horizoverlay](https://github.com/bsides/horizoverlay/) with some of [ikegami](https://github.com/hibiyasleep/ikegami)'s features. The project is based on React with MobX & Vite, and the dedicated [ffxiv-overlay-api](https://github.com/dsrkafuu/ffxiv-overlay-api).

<img align="center" src="https://raw.githubusercontent.com/dsrkafuu/skyline-overlay/main/assets/preview-v1.6.0.jpg" alt="Skyline Preview" />
<img align="center" src="https://raw.githubusercontent.com/dsrkafuu/skyline-overlay/main/assets/preview-v2.0.0.jpg" alt="Skyline Extended Preview" />

## Overlay Link

- CloudFlare: `https://skyline.dsrkafuu.su`

Need to be used with [ngld/OverlayPlugin](https://github.com/ngld/OverlayPlugin). For WebSocket mode, only these browsers below are officially supported:

- Chrome (Chromium) >= 80
- Safari >= 13 (macOS >= 10.15)
- Edge >= 80 (new Edge with Chromium)
- Firefox >= 80

> Note that `backdrop-filter` support needs to be enabled manually on Firefox, check [Can I use](https://caniuse.com/css-backdrop-filter) for more details.

## To-do List

- [x] Combatent sort - v1.1.x
- [x] UI zoom - v1.2.x
- [x] Multi-lingual support - v1.3.x
- [x] Combatant number limit - v1.4.x
- [x] Switch show LB - v1.4.x
- [x] Short playername - v1.4.x
- [x] Custom font family - v1.5.x
- [x] Themes - v1.6.x
- [x] HPS display - v1.7.x
- [x] Highlight self - v1.7.x
- [x] Detailed data for each player - v1.8.x
- [x] Custom CSS - v1.8.x
- [x] Optional shorten numbers - v2.0.x
- [x] C/D/CD tickers - v2.0.x

## Contribute

Clone this repo, install packages and run the development server:

```bash
git clone https://github.com/dsrkafuu/skyline-overlay.git
cd skyline-overlay
npm install
npm run dev
```

### Add Translations

Please use [ISO 639-1:2002](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) defined 2-letter code as filename, use `ja` as an example:

1. Create a new `ja.json` file in `@/src/lang`, use `en.json` as a template
2. Import `ja.json` in `@/src/lang/index.js`
3. Add a new lang in `@/src/lang/index.js` exported map, like `ja: { translation: ja },`

Community translators:

- German: [@Slightlyxz](https://github.com/Slightlyxz)

### Add Custom Themes

1. Create a new `your-theme-filename.scss` file in `@/src/themes`, use `default.scss` and `ikegami.scss` as examples
2. Import `your-theme-filename.scss` in `@/src/themes/index.js`
3. Add a new theme in `@/src/themes/index.js` exported map, like `'your-theme-filename': { text: 'The New Theme' }`

## Major Dependencies

- React: <https://reactjs.org/>
- MobX: <https://mobx.js.org>
- Vite: <https://vitejs.dev>
- ffxiv-overlay-api: <https://github.com/dsrkafuu/ffxiv-overlay-api>

## LICENSE

<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fdsrkafuu%2Fskyline-overlay?ref=badge_large" alt="FOSSA Status"><img align="right" src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdsrkafuu%2Fskyline-overlay.svg?type=large"/></a>

Released under `Mozilla Public License 2.0`, for more information read the [LICENSE](https://github.com/dsrkafuu/skyline-overlay/blob/main/LICENSE).

**Copyright © 2020-present DSRKafuU (<https://dsrkafuu.su>)**
