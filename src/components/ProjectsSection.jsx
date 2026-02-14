import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Job Hive",
    description: "Built a college placement and training cell platform where admins can post jobs, manage recruitment rounds, and filter candidates. Integrated real-time email notifications for OTPs, job updates, application status, and round results.",
    image: "/projects/Hive.png",
    tags: ["React", "Express", "postgreSQL", "Prisma","Tailwind"],
    demourl: "https://jobhives.vercel.app/",
    githuburl: "https://github.com/Surya-Hitesh-Nalam/job_backend",
  },
  {
    id: 2,
    title: "Shuriken-AI Powered LMS Portal",
    description:
      "Shuriken is an AI-powered LMS that personalizes learning through adaptive content, intelligent assessments, and mock interviews. It tracks student progress and provides real-time performance analytics.",
    image: "/projects/shuriken.png",
    tags: ["React", "Tailwind", "MongoDB", "Express", "GeminiAPI"],
    demourl: "https://github.com/Surya-Hitesh-Nalam/Shuriken-LMS",
    githuburl: "https://github.com/Surya-Hitesh-Nalam/Shuriken-LMS",
  },
  {
    id: 3,
    title: "InternOS",
    description: "AI powered Job simulation game that provides real world experience of working in a tech company . The chaos in the codebase , the pressure of deadlines and the thrill of solving complex problems - all in a fun and engaging way.",
    image: "/projects/InternOS.png",
    tags: ["React.js", "Express.js", "Tailwind", "MangoDB", "GeminiAPI"],
    demourl: "https://internos-client.onrender.com/",
    githuburl: "https://github.com/Surya-Hitesh-Nalam/InternOS",
  },
  {
    id: 4,
    title: "AI Email Template",
    description: "An AI-generated email templateAI-Generated Email Template – Built an AI tool that creates personalized and professional email drafts using NLP to understand user intent and tone. ",
    image: "/projects/ai-email.png",
    tags: ["Next.js", "Tailwind", "Firebase"],
    demourl: "#",
    githuburl: "#",
  },
  {
    id: 5,
    title: "Quiz Master",
    description: "Quiz Master is a full-stack quiz application that allows users to create, take, and manage quizzes. It features user authentication, real-time score tracking, and an intuitive interface.",
    image: "/projects/quiz.png",
    tags: ["React", "Express", "MongoDB"],
    demourl: "#",
    githuburl: "#",
  },
  {
    id: 6,
    title: "AI PDF Notes",
    description: " AI-Powered PDF Notes – Developed a web app that extracts key points from PDFs using NLP, allowing users to upload documents and receive concise summaries for efficient studying.",
    image: "/projects/aipdfnotes.png",
    tags: ["Next.js", "Convex", "Tailwind", "NLP"],
    demourl: "#",
    githuburl: "#",
  },
   {
    id: 7,
    title: "careOps",
    description: "AI Powered Bookings, CRM, inbox, forms, inventory, analytics, and automation — everything a service business needs, unified in one beautiful platform. ",
    image: "/projects/careOps.png",
    tags: ["React.js", "Express.js", "Tailwind", "GeminiAPI","PostgreSQL","PrismaORM"],
    demourl: "https://careops-eoa7.onrender.com/",
    githuburl: "https://github.com/Surya-Hitesh-Nalam/careOps",
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
