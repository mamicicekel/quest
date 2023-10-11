import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`main-header ${menuOpen ? 'responsive' : ''}`}>
      <Link to='/' className={menuOpen ? 'logo' : ''}><img src={Logo} alt='Quest Logo' loading='lazy' /></Link>
      <div class={`hamburger-lines ${menuOpen ? 'responsive' : ''}`} onClick={toggleMenu}>
        <span class={`line line1 ${menuOpen ? 'responsive' : ''}`}></span>
        <span class={`line line2 ${menuOpen ? 'responsive' : ''}`}></span>
        <span class={`line line3 ${menuOpen ? 'responsive' : ''}`}></span>
      </div>
      <nav className={menuOpen ? 'responsive' : ''}>
        <Link to='/'>home</Link>
        <Link to='about'>about</Link>
        <Link to='courses'>courses</Link>
        <Link to='teachers'>teachers</Link>
        <Link to='contact'>contact</Link>
      </nav>
    </header>
  )
}
