import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('marray');

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button>Change name</button>
    </div>
  );
}

export default App;
