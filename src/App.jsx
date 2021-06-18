import React from 'react';
import './App.css';
import NewNote from './components/NewNote';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

const App = () => {

  return (
    <div className="App">
      <header>
        <h1>Memoguy</h1>
      </header>
      <NewNote/>
      <LeftSideBar/>
      <RightSideBar/>
    </div>
  )
}

export default App;
