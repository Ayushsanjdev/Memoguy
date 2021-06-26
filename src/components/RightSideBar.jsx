import React from "react";
import ReactQuill from "react-quill";

const RightSideBar = ({
  setShowBody,
  showBody,
  setShowTitle,
  allNotes,
  selectedNote,
  setSelectedNote,
  updateData,
  showTitle
}) => {
  // const addBody = async (val) => {
  //   await setShowBody(val);
  // };

  const updateTitle = (e) => {
    setSelectedNote(e.target.value);
  };

  return (
    <div className="editor">
      <input value={selectedNote} />
      <ReactQuill theme="snow" className="reactQuill"></ReactQuill>
    </div>
  );
};

export default RightSideBar;
