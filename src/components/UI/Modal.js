import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

// import CloseIcon from '/svgs/close.svg';

const Backdrop = ({ toggleFilter }) => {
  return <div className="backdrop" onClick={toggleFilter}></div>;
};

const Overlay = ({ children, heading, toggleFilter }) => {
  return (
    <div className="modal">
      <h3 className="modal__header">
        <p>{heading}</p>
        <div className="modal-img">
          <img src="/images/svgs/close.svg" width={25} height={25} onClick={toggleFilter} />
        </div>
      </h3>
      <div className="modal-content">{children}</div>
    </div>
  );
};

const Modal = ({ children, toggleFilter, heading }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop toggleFilter={toggleFilter} />, document.getElementById('modal-root'))}
      {ReactDOM.createPortal(
        <Overlay heading={heading} toggleFilter={toggleFilter}>
          {children}
        </Overlay>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
