import React, { useState, useEffect } from "react";
import "./App.css";
import Head from "./components/Head";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import "./firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";

const App = () => {
  const [showTitle, setShowTitle] = useState("");
  const [showBody, setShowBody] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const updateData = () => {
    firebase.firestore().collection("notes").doc().update({
      title: doc.data().title,
      body: doc.data().body,
    })
  }

  const getData = () => {
    firebase
      .firestore()
      .collection("notes")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        setAllNotes(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            body: doc.data().body,
          }))
        );
      });
  };

  const addData = () => {
    firebase
      .firestore()
      .collection("notes")
      .add({
        title: showTitle,
        body: showBody,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("doc successfully written!");
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

  const delData = () => {
    firebase
      .firestore()
      .collection("notes")
      .doc(selectedNote)
      .delete()
      .then(() => {
        console.log("successfully deleted");
      });
  };

  return (
    <div className="App">
      <Head
        setShowTitle={setShowTitle}
        showTitle={showTitle}
        addData={addData}
      />
      <main>
        <LeftSideBar
          showTitle={showTitle}
          allNotes={allNotes}
          delData={delData}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
        />
        {selectedNote ?
        <RightSideBar
          allNotes={allNotes}
          setShowBody={setShowBody}
          showBody={showBody}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
        /> : 
        <p 
          style={{margin: '0 auto', fontFamily: 'Open Sans', alignSelf: 'center', fontSize: '1.5rem', opacity: '0.7'}}>
          Click on any Title or add <br/> new title to see Editor
        </p>}
        </main>
      <footer>
        Made with🧠 by
        <a href="https://github.com/ayushsanjdev"> ayushsanjdev </a>{" "}
      </footer>
    </div>
  );
};

export default App;
