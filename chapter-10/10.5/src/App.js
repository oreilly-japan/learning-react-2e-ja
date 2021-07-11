import React from 'react';
import {timesTwo} from './functions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          18 x 2 =  <code>timesTwo(18)</code> = {timesTwo(18)}
        </p>
      </header>
    </div>
  );
}

export default App;
