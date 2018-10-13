<!-- <img src='./src/assets/fyj.png' width='80' align="right" /> -->

# Coalk
[![TravisCI](https://img.shields.io/travis/com/huiyifyj/comment.js.svg?style=flat-square&logo=travis)](https://travis-ci.com/huiyifyj/comment.js)
![firebase](https://img.shields.io/npm/v/firebase.svg?style=flat-square&logo=firebase&label=API)
[![LICENSE](https://img.shields.io/github/license/huiyifyj/comment.js.svg?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSI+PHBhdGggZD0iTTUxMiAxNkMyMzguMDY2IDE2IDE2IDIzOC4wNjYgMTYgNTEyczIyMi4wNjYgNDk2IDQ5NiA0OTYgNDk2LTIyMi4wNjYgNDk2LTQ5NlM3ODUuOTM0IDE2IDUxMiAxNnogbTIzNC4yNjggNjkzLjUwNmMtMy4xODQgMy43MzQtNzkuNTUyIDkxLjQ2Mi0yMTkuNzAyIDkxLjQ2Mi0xNjkuMzg0IDAtMjg4Ljk2OC0xMjYuNTItMjg4Ljk2OC0yOTEuMTM0IDAtMTYyLjYwNiAxMjQuMDA4LTI4Ni44MDIgMjg3LjUyNC0yODYuODAyIDEzMy45MTQgMCAyMDMuOTMgNzQuNjMgMjA2Ljg0NCA3Ny44MDhhMjQgMjQgMCAwIDEgMi40NzYgMjkuMjQ2bC00NC43NiA2OS4zMWMtOC4wOTggMTIuNTM0LTI1LjU0OCAxNC43MDItMzYuNDY4IDQuNTktMC40NjYtMC40MjgtNTMuMDU4LTQ3Ljc2LTEyMy43Ni00Ny43Ni05Mi4yMzIgMC0xNDcuODMyIDY3LjE1LTE0Ny44MzIgMTUyLjE2NCAwIDc5LjIwNCA1MS4wMjggMTU5LjM4NCAxNDguNTU0IDE1OS4zODQgNzcuMzk0IDAgMTMwLjU2LTU2LjY3NiAxMzEuMDg4LTU3LjI1IDEwLjI2NC0xMS4xMyAyOC4xMTgtMTAuMDY2IDM3LjAxNiAyLjEwNmw0OS4wOTQgNjcuMTQ0YTI0LjAwMiAyNC4wMDIgMCAwIDEtMS4xMDYgMjkuNzMyeiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==)](https://github.com/huiyifyj/comment.js/blob/master/LICENSE)
> 💬 `Coalk` is comment component base on firebase realtime database for static pages.

[**Preview Live**](https://dev.huiyifyj.cn)

> **Note**: This project is developing.

## Features
- Simple and lightweight.
- No server-side implementation.
- Support on authentication with gravatr json API.
- Serverless, data be stored in firebase realtime database.

## Install
- Via npm :
```bash
# Temporary vacancy
```
- Import CDN :
```html
<!-- Temporary vacancy -->
```
- Build files :
```bash
$ npm i
$ npm run build
```
Then generate `fyj.min.css` and `fyj.min.js` and their sourcemap files in `dist` folder.

## Usage
Add a container to you page:
```html
<div id="fyj"></div>
```
Then use the Javascript code below to new a comment instance:
```html
<script>
new FYJ({
    apiKey: 'Firebase apiKey',
    databaseURL: 'Firebase databaseURL',
    authDomain: "Firebase authDomain",
    // And other options setting.
});
</script>
```
#### About options parameters
Option | Default | Description
---|---|---
`cdn` | `https://gravatar.loli.net/avatar/` | `string`<br> The gravatar CDN url.
`row` | `8` | `number`<br> The comment maximum number loaded initially.
`language` | `navigator.browserLanguage.toLowerCase()` | `string`<br> The language setting, values: 'en', 'zh-cn'.
`apiKey` | `null` | `string`<br> Your firebase apiKey.
`authDomain` | `null` | `string`<br> Your firebase Authentication authDomain.
`databaseURL` | `null` | `string`<br> Your firebase realtime database databaseURL.

## Development
```bash
$ git clone git@github.com:huiyifyj/comment.js.git
$ cd comment.js
$ npm install
$ npm run dev
```
Then open your browser, visit http://127.0.0.1:3000/ .

## License
> [MIT](https://github.com/huiyifyj/comment.js/blob/master/LICENSE)

<br>
<br>
<div align=center>
    &copy; 2018 &nbsp; | &nbsp; <a href="https://huiyifyj.github.io" target="_blank">Huiyi.FYJ</a>
</div>
