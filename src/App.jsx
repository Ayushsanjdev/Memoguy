import React from 'react';
import './App.css';
import Title from './components/Head';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

const App = () => {

  return (
    <div className="App">
      <Title/>
      <main>
        <LeftSideBar/>
        <RightSideBar/>
      </main>
      <footer>
        Made with 💕 by 
        <a href="https://github.com/ayushsanjdev"> ayushsanjdev</a>
      </footer>
    </div>
  )
}

export default App;
