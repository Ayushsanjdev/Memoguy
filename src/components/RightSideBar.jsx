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
  showTitle,
}) => {

  const updateTitle = (e) => {
    setSelectedNote(e.target.value);
  };

  return (
    <div className="editor">
      <input type="text" value={selectedNote} onChange={updateTitle} />
      <ReactQuill theme="snow" className="reactQuill"></ReactQuill>
    </div>
  );
};

export default RightSideBar;
