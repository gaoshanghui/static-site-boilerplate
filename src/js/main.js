import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

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

// Demo Page
// Texts animation
if (document.querySelector('.Presentation')) {
  gsap.to('.Presentation__section-line', {duration: 4, scale: 1, transformOrigin:"50% 50%", ease: Power4.easeOut});
}
