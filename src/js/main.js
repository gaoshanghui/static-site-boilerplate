import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

const sayHello = () => {
  console.log('Happy Hacking! 🌈🌟🎉🦄');
}

sayHello();

// React Application
ReactDOM.render(
  <Hello />,
  document.getElementById('react-app-root')
);
