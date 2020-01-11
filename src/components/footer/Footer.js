import React from 'react'; //react
import './Footer.css'; //css
import { Navbar } from 'react-bootstrap'; //bootstrap

const Footer = () => {
  return (
    //using navbar fixed bottom as footer - looks cool :)
    <Navbar fixed="bottom justify-content-center bg-black" >
      <p className="small text-center text-light m-md-0 p-2">
        Made for University of Arizona Coding Bootcamp, Week-19, January 2020
      </p>
    </Navbar>
  );
}

export default Footer;