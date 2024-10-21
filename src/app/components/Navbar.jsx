// src/app/components/Navbar.jsx
'use client'; // Add this if you're using the App Router (Next.js 13+)

import React from 'react';
import dynamic from 'next/dynamic';
import PulsatingButton from "./ui/pulsating-button";

// Dynamically import Link from react-scroll
const Link = dynamic(() => import('react-scroll').then(mod => mod.Link), { ssr: false });

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
          <PulsatingButton>Home</PulsatingButton>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
          <PulsatingButton>About</PulsatingButton>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
          <PulsatingButton>Contact</PulsatingButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
