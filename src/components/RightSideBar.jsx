import React, { useState } from "react";
import { Editor, EditorState, ContentState, RichUtils }
 from "draft-js";
import "draft-js/dist/Draft.css";

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

  const [editorState, setEditorState] = useState
    (() => EditorState.createEmpty());

  const updateTitle = (e) => {
    setSelectedNote(e.target.value);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = 
      RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return 'handled';
    }

    return 'not-handled';
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
          className="draft"
          editorState={editorState} 
          onChange={setEditorState} /> 
      </div>

    </div>
  );
};

export default RightSideBar;
