import React from "react";
import ReactQuill from "react-quill";

const RightSideBar = ({ setShowBody, showBody }) => {

  const addBody = async (val) => {
    await setShowBody(val);
  };

  return (
    <div className="editor">
      <ReactQuill theme="snow" 
        className="reactQuill" 
        value={showBody}
        onChange={addBody}>
      </ReactQuill>
    </div>
  );
};

export default RightSideBar;
