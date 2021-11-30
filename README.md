# Static Site Boilerplate

An automated workflow (boilerplate) for building static websites.

## Features

- Modern Technology: Full support for HTML5, JavaScript (Vanilla and ES6), and CSS (Sass).
- Built-in Server: It comes with a development server that can be reloaded.
- Performance Tuning: Supports CSS and JavaScript transpilation, bundling, autoprefixing and minification

## Installation

Before proceeding to the following steps, [NodeJS](https://nodejs.org/) must be pre-installed.

**Step 1**: Clone or download the Git Repo

**Step 2**: Initialization

```
cd static-site-boilerplate
```

```
npm install
```

## Commands

### Local Development Server

To start a local development server:\
`npm run dev`

### Build for Production

To build the production website, run the following command in the root directory of the project.\
`npm run build`

### Local Production Server

To start a local production server:\
`npm start`

## Usage Guide

`src/` is the root directory for development.。

### HTML

Create an html file in the root directory or a subdirectory of `src/`.\
Initially, it comes with index.html - the template.

### CSS/SCSS

This environment supports Sass for writing CSS styles. The main stylesheet in the `src/scss` directory is `main.scss`. This environment does not force the user to write CSS in any way. However, it is highly recommended that you follow Sass best practices for your actual project.

#### Handling of Images

When importing images into a .scss file, the file path must be specified relative to the `src` directory structure. The correct example is as follows：

```
background: url('../images/background.png');
```

[**Dart Sass**](https://sass-lang.com/dart-sass) is recommended.

### JavaScript

This environment initially contains one JavaScript file in the `src/js/` directory:
`main.js` - Since this environment uses Webpack to bundle JavaScript, `main.js` is an **entry point**. It means that when you remove it or use another name, you should also change the environment configuration file (webpack.config.js) to match.

### Images and other files

Under `src/`, there is an `assets` directory. You can put images, videos or data (json) files in this directory.
