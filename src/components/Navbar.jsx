import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
      <div>
        <a href="https://drive.google.com/file/d/1Qvxc6U5iwR2FqDB0dkOQ5gON_sVbY-qR/view?usp=sharing" target="_blank" rel="noreferrer">
          <img className='logo' src={Logo} alt="Resume" />
        </a>
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <NavLink exact to='/' activeClassName='active-link' onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/About' activeClassName='active-link' onClick={handleClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/Skills' activeClassName='active-link' onClick={handleClick}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to='/Projects' activeClassName='active-link' onClick={handleClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/Contact' activeClassName='active-link' onClick={handleClick}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className='hamburger' onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: 'white' }} /> : <FaBars size={20} style={{ color: 'white' }} />}
      </div>
    </div>
  );
};

export default Navbar;
