
import React from 'react'
import '../../src/Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
