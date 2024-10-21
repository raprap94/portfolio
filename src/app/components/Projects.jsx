import Image from 'next/image';
import PulsatingButton from "./ui/pulsating-button";
import SparklesText from "./ui/sparkles-text";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <SparklesText text="My Project" />
      <div className="project-list">
        {/* Project 1 */}
        <div className="project-card">
          <Image
            src="/images/project1.jpg"
            alt="Project 1"
            width={400}
            height={300}
            className="project-image"
          />
          <h3>Project 1</h3>
          <p>
            This one is Technoshop. We worked on it in second year using Figma,
            and we coded it in Visual Studio with HTML and CSS.
          </p>
          <a
            href="https://www.figma.com/design/6ufxES81TTQzzaGs6hEjSp/Website-Wirefram?node-id=1-197&node-type=canvas&t=KSO9jGGYxXpxQN0Z-0"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <PulsatingButton>View Project</PulsatingButton>
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <Image
            src="/images/project2.jpg"
            alt="Project 2"
            width={400}
            height={300}
            className="project-image"
          />
          <h3>Project 2</h3>
          <p>
            This project is AwesomeTodo. We used MongoDB for the database, and
            deployed it on Render and GitHub.
          </p>
          <a
            href="https://awesomesisir.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <PulsatingButton>View Project</PulsatingButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
