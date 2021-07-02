import React, { useState } from "react";
import { convertToRaw, EditorState, ContentState} from "draft-js";
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

  const [editorState, setEditorState] = useState
    (
      selectedNoteBody === null ? 
      EditorState.createEmpty()
      :
      EditorState.createWithContent(ContentState.
        createFromText(selectedNoteBody)) // now editorstate is selctedNoteBody's text
    );

  const updateTitle = (e) => {
    e.preventDefault();
    setSelectedNote(e.target.value)
  };

  const updateBody = (content) => {
    const stringContent = JSON.stringify(
      convertToRaw(content));
    const textContent = JSON.parse(stringContent);   // parsing json and accessing the text on nextline  
    setSelectedNoteBody(textContent.blocks[0].text);
  }

  const handleBody = (editorState) => {
    const contentState = editorState.getCurrentContent();
    updateBody(contentState);
    setEditorState(editorState);
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
