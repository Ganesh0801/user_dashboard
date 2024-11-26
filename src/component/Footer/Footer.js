import React from 'react';
import "./Footer.css";

const Footer = ({text}) => {
  return (
    <>
      <div className='footer'>
        <p>&copy; {text}</p>
      </div>
    </>
  );
}

export default Footer;
