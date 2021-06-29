import React, { useState, useEffect } from "react";
import "./App.css";
import Head from "./components/Head";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import "./firebase/config";
import firebase from "firebase/app";
import "firebase/firestore";
import { EditorState } from "draft-js";

const App = () => {
  const [showTitle, setShowTitle] = useState("");
  const [showBody, setShowBody] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteIndex, setSelectedNoteIndex] = 
    useState(null);
  const [selectedNoteBody, setSelectedNoteBody] = 
    useState(EditorState.createEmpty());

  useEffect(() => {
    getData();
  }, []);

  // useEffect(async () => {
  //   updateData();
  // }, [showTitle, showBody])

  const updateData = () => {
    firebase
      .firestore()
      .collection("notes")
      .doc(selectedNoteIndex)
      n.update({
      title: showTitle,
      body: showBody,
    });
  };

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
    showTitle === ""
      ? alert("Title is empty!")
      : firebase
        .firestore()
        .collection("notes")
        .add({
          title: showTitle,
          body: showBody,
          createdAt: firebase
            .firestore
            .FieldValue
          
            .serverTimestamp(),
        })
        .then(() => {
          console.log("doc successfully written!");
          setShowTitle("");
        })
        .catch((error) => {
          console.error("error: ", error);
        });
  };

  const delData = () => {
    firebase
      .firestore()
      .collection("notes")
      .doc(selectedNoteIndex)
      .delete()
      .then(() => {
        console.log("successfully deleted");
        setSelectedNote(null);
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
          selectedNoteIndex={selectedNoteIndex}
          setSelectedNoteIndex={setSelectedNoteIndex}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          selectedNoteBody={selectedNoteBody}
          setSelectedNoteBody={setSelectedNoteBody}
        />

        {selectedNote ? (
          <RightSideBar
            allNotes={allNotes}
            setShowBody={setShowBody}
            showBody={showBody}
            setShowTitle={setShowTitle}
            showTitle={showTitle}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            updateData={updateData}
            selectedNoteBody={selectedNoteBody}
            setSelectedNoteBody={setSelectedNoteBody}
          />
        ) : (
          <p
            style={{
              margin: "0 auto",
              fontFamily: "Open Sans",
              alignSelf: "center",
              fontSize: "1.5rem",
              opacity: "0.7",
            }}
          >
            Click on any Title or add <br /> 
              new title to see Editor
          </p>
        )}
      </main>
      <footer>
        Made with🧠 by
        <a href="https://github.com/ayushsanjdev"> 
          ayushsanjdev </a>{" "}
      </footer>
    </div>
  );
};

export default App;
