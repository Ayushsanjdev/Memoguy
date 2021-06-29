import React from "react";

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
      <input type="text" 
        value={selectedNote} 
        onChange={updateTitle} />
    </div>
  );
};

export default RightSideBar;
