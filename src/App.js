import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const developmentVersion = process.env.REACT_APP_DEVELOPMENT_VERSION === 'true'
  ? 'Em desenvolvimento' : ' ';

function App() {
  return (
    <div className="App">
      <StrangerThings />
      <p>{ developmentVersion }</p>
    </div>
  );
}

export default App;
