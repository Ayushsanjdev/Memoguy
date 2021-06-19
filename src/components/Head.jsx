import React from 'react';
import { Button } from '@material-ui/core';
import SpringModal from './modal';

const Head = () => {
  return(
    <header>
      <div className="open">
      <h1>Memoguy </h1>
      <small> open</small>
      </div>
      <SpringModal/>
    </header>
  )
}

export default Head;