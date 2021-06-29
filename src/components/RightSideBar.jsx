import React from "react";
import { Editor, RichUtils } from "draft-js";

const RightSideBar = ({
  setShowBody,
  showBody,
  setShowTitle,
  allNotes,
  selectedNote,
  setSelectedNote,
  selectedNoteBody,
  setSelectedNoteBody,
  updateData,
  showTitle,
}) => {

  const updateTitle = (e) => {
    setSelectedNote(e.target.value);
  };

  const updateBody = (selectedNoteBody) => {
    setSelectedNoteBody({selectedNoteBody});
  }

  const toggleInlineStyle = (e) => {
    e.preventDefault();
    let style = e.currentTarget.getAttribute('data-style');
    setSelectedNoteBody(RichUtils.toggleInlineStyle(
      selectedNoteBody, style
    ));
  }

  return (
    <div className="editor">
      <input type="text" 
        value={selectedNote} 
        onChange={updateTitle} />

        <input
          type="button"
          value="Bold"
          data-style="BOLD"
          onMouseDown={toggleInlineStyle}
        />

        <input
          type="button"
          value="Italic"
          data-style="ITALIC"
          onMouseDown={toggleInlineStyle}
        />

      <div className="draft-editor-wrapper">
        <Editor 
          editorState={selectedNoteBody} 
          onChange={updateBody} /> 
      </div>

    </div>
  );
};

export default RightSideBar;
