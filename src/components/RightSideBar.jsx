import React, { useState, useRef } from "react";
// import { Editor } from "draft-js";
// import 'draft-js/dist/Draft.css';
// import { stateToHTML } from "draft-js-export-html";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import { debounce } from "../helper/debounceFunction";

// import { convertToRaw, EditorState, ContentState} from "draft-js";
// import createHashtagPlugin from '@draft-js-plugins/hashtag';
// import createLinkifyPlugin from '@draft-js-plugins/linkify';
// import InlineStylesEditor from "./EditorStyles";

// const hashtagPlugin = createHashtagPlugin();
// const linkifyPlugin = createLinkifyPlugin();

// const plugins = [linkifyPlugin, hashtagPlugin];

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
  editor,
  delData
}) => {

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty());

  const title = useRef();

  const updateTitle = (e) => {
    e.preventDefault();
    setSelectedNote(e.target.value);
  }

  const focusTitle = () => {
    title.current.focus();
  }

  // const handleBody = (editorState) => {
  //   const contentState = editorState.getCurrentContent();
  //   const stringContent = JSON.stringify(
  //     convertToRaw(contentState));
  //   const textContent = JSON.parse(stringContent);
  //   const mainText = stateToHtml(textContent.blocks[0].text);
  //   setSelectedNoteBody(mainText);
  //   setEditorState(editorState);
  //}


  return (
    <div className="editor">

      <div className="editorTitle">
        <EditIcon 
          className="titleEdit"
          onClick={focusTitle} /> 
        <input type="text"
          ref={title}
          className="editorTitle"
          value={selectedNote} 
          onChange={updateTitle}/>
        <DeleteIcon className="deleteIcon" 
          onClick={delData} />
      </div>

      <ReactQuill 
        className="quillEditor"
        theme= "snow"
        ref={editor}
        value={selectedNoteBody}
        onChange={setSelectedNoteBody} />

      {/* <InlineStylesEditor 
        editorState={editorState}
        setEditorState={setEditorState}
        plugins={plugins}
        handleBody={handleBody} /> */}

    </div>
  );
};

export default RightSideBar;
