import "./Navbar.css"
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>Sobre</Link>
      <Link to={"/trabalhos"}>Trabalhos</Link>
      <Link to={"/hobbies"}>Hobbies</Link>
      <Link to={"/formacao"}>Formação</Link>
    </nav>
  )
}

export default Navbar;