// app/page.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Articles from './components/Articles'; // Import Articles component
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Articles /> {/* Add Articles component here */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
