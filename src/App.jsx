import React from 'react';
import './App.css';
import NewNote from './components/title';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

const App = () => {

  return (
    <div className="App">
      <header>
        <h1>Memoguy</h1>
      </header>
      <NewNote/>
      <main>
        <LeftSideBar/>
        <RightSideBar/>
      </main>
    </div>
  )
}

export default App;
