// React library
import React from 'react';
import ReactDOM from 'react-dom';
// import React components
import Hello from './Hello';

// import three.js
// import * as THREE from 'three'


// Test script has been whether successfully loaded.
const sayHello = () => {
  const port = 3000;

  console.log('Happy Hacking! 🌈🌟🎉🦄');
  console.log(`Server is listening at http://localhost:${port}`);
}

sayHello();

// React Application example.
if (document.getElementById('react-app-root')) {
  ReactDOM.render(
    <Hello />,
    document.getElementById('react-app-root')
  );
};



/* Demo Page */
// Text animation
if (document.querySelector('.Presentation')) {
  import('./utils/animations')
    .then((module) => {
      module.default();
    });
}

// TO-DO ThreeJS demo
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();

// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
//   requestAnimationFrame( animate );
  
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
  
//   renderer.render( scene, camera );
// }
// animate();
