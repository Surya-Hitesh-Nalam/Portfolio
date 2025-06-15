import { useState } from "react";
import { cn } from "../lib/utils";

// react-icons imports
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiTypescript, SiNextdotjs, SiMysql } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Javascript", level: 85, category: "frontend" },
  { name: "ReactJS", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 65, category: "frontend" },
  { name: "NodeJS", level: 55, category: "backend" },
  { name: "ExpressJS", level: 45, category: "backend" },
  { name: "Python", level: 85, category: "frontend" },
  { name: "MongoDB", level: 25, category: "backend" },
  { name: "SQL", level: 15, category: "backend" },
  { name: "TypeScript", level: 95, category: "frontend" },
  { name: "Next.js", level: 95, category: "frontend" },
  { name: "Postman", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Git/GitHub", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

// Mapping each skill to an icon component
const skillIcons = {
  "HTML/CSS": <FaHtml5 className="text-[#E34F26]" />,
  Javascript: <FaJs className="text-[#F7DF1E]" />,
  ReactJS: <FaReact className="text-[#61DAFB]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  NodeJS: <FaNodeJs className="text-[#539E43]" />,
  ExpressJS: <SiExpress className="text-gray-700" />,
  Python: <FaPython className="text-blue-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  SQL: <SiMysql className="text-[#00758F]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  Postman: <SiPostman className="text-orange-500" />,
  "VS Code": <DiVisualstudio className="text-blue-500" />,
  "Git/GitHub": <FaGitAlt className="text-[#F05032]" />,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:border-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skillIcons[skill.name];
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs relative border border-border"
              >
                {/* Icon top-right */}
                <div className="absolute top-4 right-4 text-primary/80 text-xl">
                  {Icon}
                </div>

                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
