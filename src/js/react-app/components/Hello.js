import React from 'react';

const Hello = () => {
  const port = 3000;
  console.log('Happy Hacking! 🌈🌟🎉🦄');
  console.log(`Server is listening at http://localhost:${port}`);

  return (
    <div className="Hello">
      <h2 className="Hello__headline">The boilerplate now{'\n'}support using React!</h2>
      <img className="Hello__image" src="./assets/images/plant-leaf.jpg" alt="plant leaf" />
    </div>
  )
}

export default Hello;
