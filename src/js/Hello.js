import React from 'react';

// TO-DO
// How to organize style of the component?
// write in the components.scss or styled components

const Hello = () => {
  return (
    <div className="Hello">
      <h2 className="Hello__headline">The boilerplate now{'\n'}support using React!</h2>
      <img className="Hello__image" src="./assets/images/plant-leaf.jpg" alt="plant leaf" />
    </div>
  )
}

export default Hello;
