import React from 'react';
import SparklesText from "./ui/sparkles-text";
import PulsatingButton from "./ui/pulsating-button";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2><SparklesText text="Contact" />;</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <PulsatingButton className='butt'>Submit</PulsatingButton>
      </form>
    </section>
  );
};

export default Contact;
