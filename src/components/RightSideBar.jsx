import React from "react";
import ReactQuill from "react-quill";

const RightSideBar = ({
  setShowBody,
  showBody,
  setShowTitle,
  allNotes,
  selectedNote,
  updateData,
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
        <input
          id="title"
          placeholder="title"
          className="quillTitle"
          onChange={updateTitle}
        />
      <ReactQuill theme="snow" className="reactQuill"></ReactQuill>
    </div>
  );
};

export default RightSideBar;
