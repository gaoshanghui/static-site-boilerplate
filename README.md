# Front-end Boilerplate
A Front-end boilerplate using Gulp and Sass.

## Features

The main features are as follows

- Launch local server
- Automatic browser refresh on source code changes
- Compilation of Sass && Automatic addition of prefixes
- Javascript version conversion (ES6 to ES5)
- Optimization of image files

## Installation 💾

In order to use the boilerplate, Node.js must be installed beforehand.

### 1. Install Node.js
[Download Node.js.](https://nodejs.org/)  
There are two versions, LTS and Current, so choose LTS and install it.

### 2. Download the boilerplate files  
Rename the downloaded folders as necessary.

### 3. Initialize the environment

Open a terminal and enter the following command. For example, if the unzipped boilerplate folder is not renamed and placed on the desktop.
```
cd ~/Desktop/front-end-boilerplate
npm install
```
Once the installation is complete, you will be able to use it.

## # Quick Start 🔨
The boilerplate mainly consists of two folders, "src" and "dist".

- **src**: The folder to use when developing. All work will be done in this folder.
- **dist**: This is the folder for the source code of the production.

**Composition of the src folder**
- /images: Place images, icons, etc. in this directory.
- /js: Javascript files will be placed in this directory.
- /scss: Place the scss files in this directory. (*You can add or remove files as needed.)
- index.html: The default HTML template. (*Add about.html or contact.html if necessary.)

**Launching the development environment**.  
Type `npm start` in the terminal and the environment will be launched.  
For example, if the folder containing the boilerplate is placed on the desktop, the command would be:
```
cd ~/Desktop/front-end-boilerplate
npm start
``` 
*The default browser will be opened automatically.   
*Once started, please keep the terminal **open**. (Closing it will abort the development environment.)

**Using production build**.  
Type `npm run build` in the terminal to run the build task. The production version data will be put together in the /dist folder.


-----------------------------------------------------------------------------------------------------------
**Enjoy!**
