import NLDSComponenten from './Componenten';
import './App.css';
import "@utrecht/component-library-css/dist/index.css";
import '@utrecht/design-tokens/dist/index.css';
import '@nl-design-system-unstable/groningen-design-tokens/dist/design-tokens.css';
import React from 'react';

function App() {

  return (
    <div className="groningen-theme utrecht-theme">
      <NLDSComponenten />
    </div>
  );
}

export default App;
