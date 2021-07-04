import React, { useState, useEffect } from "react";
import { convertToRaw, EditorState, ContentState}
 from "draft-js";
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import InlineStylesEditor from "./EditorStyles";

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [linkifyPlugin, hashtagPlugin];

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

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty());

  const updateTitle = (e) => {
    e.preventDefault();
    setSelectedNote(e.target.value)
  };

  const handleBody = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const stringContent = JSON.stringify(
      convertToRaw(contentState));
    const textContent = JSON.parse(stringContent);
    const mainText = textContent.blocks[0].text;
    setSelectedNoteBody(mainText);
    setEditorState(EditorState.createWithContent(
      ContentState.createFromText(mainText)))
  }


  return (
    <div className="editor">

      <div className="editorTitle">
        <input type="text"
          className="editorTitle"
          value={selectedNote} 
          onChange={updateTitle} />
      </div>

      <InlineStylesEditor 
        editorState={editorState}
        setEditorState={setEditorState}
        plugins={plugins}
        handleBody={handleBody}/>

    </div>
  );
};

export default RightSideBar;
