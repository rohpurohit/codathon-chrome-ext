import React from 'react';
import Iframe from 'react-iframe';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <Iframe
        url="https://aikyam-7607.fly.dev/"
        width="100%"
        height="700px"
        id=""
        className=""
        // display="block"
        position="relative"
      />
    </div>
  );
};

export default Popup;
