import React from 'react';
import './App.css';
import { Press } from './Flare';

function App() {
  return (
    <div className="App">
      <Press onLongPress={console.log} onPress={console.log}>
        <div
          style={{ width: '200px', height: '200px', backgroundColor: 'red' }}
        />
      </Press>
    </div>
  );
}

export default App;
