import React from 'react';

const Navbar = props => (

  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="https://bafzali.github.io/react-memory-game/">
        Clicky Game
        </a>
      </div>
      <p className="navbar-text">{props.correct}</p>
      <p className="navbar-text">Score: {props.score} | Top score: {props.topScore}</p>
    </div>
  </nav>
);

export default Navbar;
