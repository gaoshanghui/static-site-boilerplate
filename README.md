# Static Site Boilerplate

A static site boilerplate for modern web development.

## Commands

### Development Server

`npm run dev`

### Build for Production

`npm run build`

### Local Production Server

To start a local production server:\
`npm start`

## Usage Guide

`src/` is the root directory for development.

### HTML

Create an html file in the root directory or a subdirectory of `src/`.\
Initially, it comes with a template file called index.ejs.

### CSS/SCSS

This environment supports Sass for writing CSS styles. The main stylesheet in the `src/scss` directory is `main.scss`.

When importing images into a .scss file, the file path must be specified relative to the `src` directory structure. For example:

```
background: url('../images/background.png');
```

[**Dart Sass**](https://sass-lang.com/dart-sass) is recommended.

### JavaScript

This environment initially contains one JavaScript file in the `src/js/` directory:
`main.js` - Since this environment uses Webpack to bundle JavaScript, `main.js` is an **entry point**. It is the first file that is loaded when the application is loaded.

### Images and other files

Under `src/`, there is an directory called `assets`. You can put images, videos or data (json) files in this directory.
