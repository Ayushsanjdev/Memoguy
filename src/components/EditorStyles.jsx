import React from 'react';
import {Editor, RichUtils, getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';


const keyBindingFunction = (event) => {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '7') {
    return 'ordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '8') {
    return 'unordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '9') {
    return 'blockquote';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'h') {
    return 'highlight';
  }

  return getDefaultKeyBinding(event);
}

const InlineStylesEditor = ({setEditorState, editorState, handleBody, plugins}) => {

  const handleKeyCommand = () => {
    var editorState = RichUtils.handleKeyCommand(editorState, command);

    if (!editorState && command === 'strikethrough') {
      editorState = RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH');
    }

    if (!editorState && command === 'blockquote') {
      editorState = RichUtils.toggleBlockType(editorState, 'blockquote');
    }

    if (!editorState && command === 'ordered-list') {
      editorState = RichUtils.toggleBlockType(editorState, 'ordered-list-item');
    }

    if (!editorState && command === 'unordered-list') {
      editorState = RichUtils.toggleBlockType(editorState, 'unordered-list-item');
    }

    if (editorState) {
      setEditorState(editorState);
      return 'handled';
    }

    return 'not-handled';
  }

  const toggleInlineStyle = (event) => {
    event.preventDefault();
    let style = event.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(
      editorState, style));
  }

  const toggleBlockType = (event) => {
    event.preventDefault();

    let block = event.currentTarget.getAttribute('data-block');
    setEditorState(RichUtils.toggleBlockType(
      editorState, block));
  }

  const renderBlockButton = (value, block) => {

    const currentBlockType = RichUtils
      .getCurrentBlockType(editorState);
    let className = '';
    if (currentBlockType === block) {
      className = 'active';
    }

    return (
      <input
        type="button"
        key={block}
        value={value}
        className={className}
        data-block={block}
        onClick={toggleBlockType}
      />
    );
  }

  const renderInlineStyleButton = (value, style) => {

    const currentInlineStyle = editorState.getCurrentInlineStyle();
    let className = '';
    if (currentInlineStyle.has(style)) {
      className = 'active';
    }

    return (
      <input
      type="button"
      key={style}
      value={value}
      className={className}
      data-style={style}
      onClick={toggleInlineStyle}
    />
    );
  }

  const inlineStyleButtons = [
    {
      value: 'Bold',
      style: 'BOLD'
    },

    {
      value: 'Italic',
      style: 'ITALIC'
    },

    {
      value: 'Underline',
      style: 'UNDERLINE'
    },

    {
      value: 'Strikethrough',
      style: 'STRIKETHROUGH'
    },

    {
      value: 'Code',
      style: 'CODE'
    },
    {
      value: 'Highlight',
      style: 'HIGHLIGHT'
    }
  ];

  const blockTypeButtons = [
    {
      value: 'Heading One',
      block: 'header-one'
    },

    {
      value: 'Heading Two',
      block: 'header-two'
    },

    {
      value: 'Heading Three',
      block: 'header-three'
    },

    {
      value: 'Blockquote',
      block: 'blockquote'
    },

    {
      value: 'Unordered List',
      block: 'unordered-list-item'
    },

    {
      value: 'Ordered List',
      block: 'ordered-list-item'
    }
  ];
  

  const styleMap = {
    'HIGHLIGHT': {
      'backgroundColor' : '#faed27',
    }
  };


  return (
    <>
    <div className="toolbar">
    <div className="inline-style-options">
      {inlineStyleButtons.map((button) => {
        return renderInlineStyleButton(button.value, button.style);
      })}
    </div>

    <div className="block-style-options">
      {blockTypeButtons.map((button) => {
        return renderBlockButton(button.value, button.block);
      })}
    </div>
    </div>

    <div className="draft-editor-wrapper">
      <Editor 
        className="draft"
        editorState={editorState}
        plugins={plugins} 
        onChange={handleBody}
        handleKeyCommand={handleKeyCommand}
        keyBindingFn={keyBindingFunction} /> 
    </div>
    </>
  )
}

export default InlineStylesEditor;