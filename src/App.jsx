import React, { useState, useEffect } from 'react';
import './App.css';
import Head from './components/Head';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import './firebase/config';
import firebase from 'firebase/app';
import 'firebase/firestore';

const App = () => {

  const [showNotes, setShowNotes] = useState([]);

  // useEffect(() => {
  //   getData()
  // }, [])

  const getData = () => {
    firebase.firestore().collection("notes").orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        body: doc.data().body,
      }))
    })}


  const addData = (input) => {
    firebase.firestore().collection("notes").add({
    title: input,
    body: 'body-pending',
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
      <Head setShowNotes={setShowNotes} addData={addData} />
      <main>
        <LeftSideBar showNotes={showNotes} />
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
