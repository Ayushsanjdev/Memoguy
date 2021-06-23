import React from "react";
import ReactQuill from "react-quill";

const RightSideBar = ({ setShowBody, showBody, allNotes, selectedNote }) => {

  // const addBody = async (val) => {
  //   await setShowBody(val);
  // };

  return (
    <div className="editor">
      <div className="quillTitle">{selectedNote.title}</div>
      <ReactQuill theme="snow" 
        className="reactQuill">
      </ReactQuill>
    </div>
  );
};

export default RightSideBar;
