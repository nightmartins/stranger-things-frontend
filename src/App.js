import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const developmentVersion = process.env.DEVELOPMENT_VERSION === 'true'
  ? <h1>Em desenvolvimento</h1> : <p> </p>;

function App() {
  return (
    <div className="App">
      <StrangerThings />
      <h1>{ developmentVersion }</h1>
    </div>
  );
}

export default App;
