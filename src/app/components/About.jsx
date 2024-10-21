import React from 'react';
import SparklesText from "./ui/sparkles-text";
import SlightFlip from './ui/flip-text'; // Adjust the path according to your folder structure

const About = () => {
  return (
    <section id="about" className="about">
      <SparklesText text="About me" />;
      <div>
        <SlightFlip 
          word="I’m Roxz Rafil, a third-year Information Technology student, A  t Western Institute Technology(WIT)." 
          duration={0.5} 
          delayMultiple={0.08} 
        />
        <br />
        <SlightFlip 
          word="When I’m not immersed in my studies, you can find me leveling up in my favorite games." 
          duration={0.5} 
          delayMultiple={0.08} 
        />
        <br />
        <SlightFlip 
          word="I thrive on new experiences and love exploring the great outdoors." 
          duration={0.5} 
          delayMultiple={0.08} 
        />
        <br />
        <SlightFlip 
          word="I’m always eager to learn and develop my skills in tech." 
          duration={0.5} 
          delayMultiple={0.08} 
        />
        <br />
        <SlightFlip 
          word="I also love a pussy cat." 
          duration={0.5} 
          delayMultiple={0.08} 
        />
      </div>
    </section>
  );
};

export default About;
