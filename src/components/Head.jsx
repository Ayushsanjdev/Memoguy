import React from 'react';
import SpringModal from './modal';

const Head = ({setShowTitle, addTitle}) => {
  return(
    <header>
      <div className="open">
      <h1>Memoguy </h1>
      <small> open</small>
      </div>
      <SpringModal setShowTitle={setShowTitle} addTitle={addTitle} />
    </header>
  )
}

export default Head;