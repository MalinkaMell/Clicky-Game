import React from 'react';
import './Footer.css';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom justify-content-center bg-black" >
      <p className="small text-center text-light m-0 p-2">
        Made for University of Arizona Coding Bootcamp, Week-19, January 2020
      </p>
    </Navbar>
  );
}

export default Footer;