import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './features/components/header';
import Home from './features/components/home';



function App() {
  return (
    <div className='App '>
      <Header />
      <Home />

    </div>
  );
}

export default App;
 