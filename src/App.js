import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const developmentVersion = process.env.DEVELOPMENT_VERSION === 'true'
  ? 'Em desenvolvimento' : ' ';

function App() {
  return (
    <div className="App">
      <StrangerThings />
      <h1>{ developmentVersion }</h1>
    </div>
  );
}

export default App;
