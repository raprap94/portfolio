import React from 'react';
import SparklesText from "./ui/sparkles-text";
import IconCloud from './ui/icon-cloud'; // Adjust the path based on your project structure

const iconSlugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2><SparklesText text="Skills" />;</h2>
      <div className="icon-cloud-wrapper">
        <IconCloud iconSlugs={iconSlugs} /> {/* Render IconCloud */}
      </div>
      <div>
        <p>Here are some of the tools, technologies, and programming languages 
        that I’ve worked with. I love learning and experimenting with new technologies 
        to stay up-to-date with industry trends.</p>
      </div>
    </section>
  );
};

export default Skills;
