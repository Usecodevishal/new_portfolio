import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent/>
    </nav>
  );
};

const NavContent = () => {
  return(
  <>
    <h2>Vishal.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#wrok">Work</a>
      <a href="#timeline">Timeline</a>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:vishconcious112@gmail.com">
        <button>Email</button>
    </a>
  </>);
};

export default Header;
