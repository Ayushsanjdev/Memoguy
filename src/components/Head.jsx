import React from "react";
import SpringModal from "./modal";

const Head = ({ setShowTitle, showTitle, addData }) => {
  return (
    <header>
      <div className="open">
        <h1>Memoguy </h1>
        <small> open</small>
      </div>
      <SpringModal
        setShowTitle={setShowTitle}
        showTitle={showTitle}
        addData={addData}
      />
    </header>
  );
};

export default Head;
