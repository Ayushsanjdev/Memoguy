import React, { useState } from "react";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";
import Editor from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createLinkifyPlugin from '@draft-js-plugins/linkify';

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

  // const [editorState, setEditorState] = useState
  //   (() => EditorState.createEmpty());

  const updateTitle = (e) => {
    e.preventDefault();
    setSelectedNote(e.target.value)
  };

  // const saveContent = (content) => {
  //   window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)))
  // }

  // const handleBody = (editorState) => {
  //   const contentState = editorState.getCurrentContent();
  //   saveContent(contentState);
  //   setEditorState(
  //     editorState = EditorState.createWithContent(
  //       convertFromRaw(JSON.parse(content))))
  // }

  const handleBody = () => {

  }

  // const content = window.localStorage.getItem('content');
  //   content ?
  //     setEditorState(
  //     setEditorState(EditorState.createEmpty())
      

  return (
    <div className="editor">
      <div className="editorTitle">
        <input type="text" 
          className="editorTitle"
          value={selectedNote} 
          onChange={updateTitle} />
      </div>
      <div className="draft-editor-wrapper">
        <Editor 
          className="draft"
          editorState={editorState}
          plugins={plugins} 
          onChange={setSelectedNoteBody} /> 
      </div>

    </div>
  );
};

export default RightSideBar;
