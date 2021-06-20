import React, { useState,useEffect } from 'react';
import './App.css';
import Head from './components/Head';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import db from './firebase/config';
import firebase from 'firebase';
import 'firebase/firestore';

const App = () => {

  const [showTitle, setShowTitle] = useState('');

  // useEffect(() => {
  //   getData()
  // }, [])

  const getData = () => {
    db.collection("notes").get().then((doc) => {
    if(doc.exists) {
      console.log("doc data: ", doc.data());
    } else {
      console.log("no such doc");
    }
  }).catch((error) => {
    console.log("error getting doc: ", error)
  })}


  const addTitle = (input) => {
    firebase.firestore().collection("notes").add({
    title: input,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log("doc successfully written!");
  })
  .catch((error) => {
    console.error("error: ", error)
  })}

  return (
    <div className="App">
      <Head setShowTitle={setShowTitle} addTitle={addTitle} />
      <main>
        <LeftSideBar showTitle={showTitle} />
        <RightSideBar/>
      </main>
      <footer>
        Made with 🧠 by 
        <a href="https://github.com/ayushsanjdev"> ayushsanjdev</a>
      </footer>
    </div>
  )
}

export default App;
