/* eslint-disable no-unused-vars */
import { useState } from "react";
import { cn } from "../lib/utils";

// react-icons imports
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiTypescript, SiNextdotjs, SiMysql } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skills = [
  { name: "HTML/CSS", category: "frontend", color: "from-orange-400 to-red-500" },
  { name: "Javascript", category: "frontend", color: "from-yellow-400 to-yellow-600" },
  { name: "ReactJS", category: "frontend", color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", category: "frontend", color: "from-teal-400 to-cyan-600" },
  { name: "NodeJS", category: "backend", color: "from-green-400 to-green-600" },
  { name: "ExpressJS", category: "backend", color: "from-gray-600 to-gray-800" },
  { name: "Python", category: "frontend", color: "from-blue-400 to-indigo-600" },
  { name: "MongoDB", category: "backend", color: "from-green-500 to-emerald-600" },
  { name: "SQL", category: "backend", color: "from-blue-500 to-blue-700" },
  { name: "TypeScript", category: "frontend", color: "from-blue-600 to-indigo-700" },
  { name: "Next.js", category: "frontend", color: "from-gray-800 to-black" },
  { name: "Postman", category: "tools", color: "from-orange-500 to-red-600" },
  { name: "VS Code", category: "tools", color: "from-blue-500 to-purple-600" },
  { name: "Git/GitHub", category: "tools", color: "from-red-500 to-orange-600" },
];

const categories = [
  { name: "all", label: "All Skills", emoji: "🚀" },
  { name: "frontend", label: "Frontend", emoji: "🎨" },
  { name: "backend", label: "Backend", emoji: "⚙️" },
  { name: "tools", label: "Tools", emoji: "🛠️" }
];

// Mapping each skill to an icon component
const skillIcons = {
  "HTML/CSS": <FaHtml5 className="text-4xl" />,
  Javascript: <FaJs className="text-4xl" />,
  ReactJS: <FaReact className="text-4xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-4xl" />,
  NodeJS: <FaNodeJs className="text-4xl" />,
  ExpressJS: <SiExpress className="text-4xl" />,
  Python: <FaPython className="text-4xl" />,
  MongoDB: <SiMongodb className="text-4xl" />,
  SQL: <SiMysql className="text-4xl" />,
  TypeScript: <SiTypescript className="text-4xl" />,
  "Next.js": <SiNextdotjs className="text-4xl" />,
  Postman: <SiPostman className="text-4xl" />,
  "VS Code": <DiVisualstudio className="text-4xl" />,
  "Git/GitHub": <FaGitAlt className="text-4xl" />,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and tools
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "group relative px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105",
                "backdrop-blur-sm border shadow-lg hover:shadow-xl",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground border-transparent shadow-primary/25"
                  : "bg-card/80 text-foreground border-border hover:bg-card"
              )}
            >
              <span className="flex items-center gap-3 font-semibold">
                <span className="text-xl group-hover:animate-bounce">{category.emoji}</span>
                {category.label}
              </span>
              {activeCategory === category.name && (
                <div className="absolute inset-0 rounded-2xl bg-primary opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => {
            const Icon = skillIcons[skill.name];
            return (
              <div
                key={skill.name}
                className="group relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 bg-card/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 border border-border overflow-hidden animate-[slideUp_0.6s_ease-out_forwards] opacity-0 translate-y-8">
                  
                  {/* Gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                    skill.color
                  )}></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "absolute w-2 h-2 rounded-full bg-gradient-to-r animate-float",
                          skill.color
                        )}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${20 + (i % 3) * 20}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: `${2 + i * 0.5}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                    {/* Icon container */}
                    <div className={cn(
                      "mb-6 p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12",
                      "bg-gradient-to-br shadow-lg group-hover:shadow-xl",
                      skill.color
                    )}>
                      <div className="text-white filter drop-shadow-sm">
                        {Icon}
                      </div>
                    </div>

                    {/* Skill name */}
                    <h3 className="font-bold text-lg text-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Category badge */}
                    <span className="mt-3 px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground capitalize opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {skill.category}
                    </span>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={cn(
                      "absolute inset-0 rounded-3xl blur-xl scale-110 bg-gradient-to-br opacity-20",
                      skill.color
                    )}></div>
                  </div>
                </div>

                {/* Reflection effect */}
                <div className="absolute -bottom-8 left-4 right-4 h-8 bg-gradient-to-t from-background/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-y-50 origin-top blur-sm"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};