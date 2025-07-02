import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shuriken-AI Powered LMS Portal",
    description:
      "Shuriken is an AI-powered LMS that personalizes learning through adaptive content, intelligent assessments, and mock interviews. It tracks student progress and provides real-time performance analytics.",
    image: "/projects/shuriken.png",
    tags: ["React", "Tailwind", "MongoDB", "Express", "GeminiAPI"],
    demourl: "https://github.com/Surya-Hitesh-Nalam/Shuriken-LMS",
    githuburl: "https://github.com/Surya-Hitesh-Nalam/Shuriken-LMS",
  },
  {
    id: 2,
    title: "AI Email Template",
    description: "An AI-generated email template ",
    image: "/projects/ai-email.png",
    tags: ["Next.js", "Tailwind", "Firebase"],
    demourl: "#",
    githuburl: "#",
  },
  {
    id: 3,
    title: "Quiz Master",
    description: "Quiz Master is a full-stack quiz application that allows users to create, take, and manage quizzes. It features user authentication, real-time score tracking, and an intuitive interface.",
    image: "/projects/quiz.png",
    tags: ["React", "Express", "MongoDB"],
    demourl: "#",
    githuburl: "#",
  },
  
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent works that showcase my full-stack development skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-70 overflow-hidden">
                <img
  src={project.image}
  alt="project item"
  className="w-full h-70 object-contain transition-all duration-500 group-hover:scale-105"
/>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demourl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githuburl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Surya-Hitesh-Nalam"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
