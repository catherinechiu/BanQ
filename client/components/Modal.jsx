import React, { Component } from 'react';
import { render } from 'react-dom';

const Modal = ({ handleClose, open, children }) => {
  const showHideClassName = open ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Add</button>
      </section>
    </div>
  );
};


export default Modal;