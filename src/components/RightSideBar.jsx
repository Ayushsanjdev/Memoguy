import React from "react";
import ReactQuill from "react-quill";

const RightSideBar = ({
  setShowBody,
  showBody,
  setShowTitle,
  allNotes,
  selectedNote,
  updateData,
  showTitle
}) => {
  // const addBody = async (val) => {
  //   await setShowBody(val);
  // };

  const updateTitle = (e) => {
    e.preventDefault();
    setShowTitle(e.target.value);
  };

  

  return (
    <div className="editor">
      <div className="quillTitle" contentEditable="true" onChange={updateTitle} >{selectedNote}</div>
      <ReactQuill theme="snow" className="reactQuill"></ReactQuill>
    </div>
  );
};

export default RightSideBar;
