import React from 'react';
import SpringModal from './modal';

const Head = ({setShowNotes, addData}) => {
  return(
    <header>
      <div className="open">
      <h1>Memoguy </h1>
      <small> open</small>
      </div>
      <SpringModal setShowNotes={setShowNotes} addData={addData} />
    </header>
  )
}

export default Head;