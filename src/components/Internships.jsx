import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const internships = [
  {
    role: "Backend Developer Intern",
    company: "Wysa",
    duration: "May 2024 – July 2024",
    description:
      "Developed RESTful APIs, handled authentication, optimized MongoDB queries and contributed to production-grade Node.js services.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    role: "Full Stack Intern",
    company: "CodeCrafts",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Built and deployed full-stack features using React, Tailwind and Express. Created dashboards, authentication, and admin panel UI.",
    tech: ["React", "Tailwind", "Express", "MongoDB"],
  },
];

export default function InternshipsSection() {
  return (
    <section
      id="internships"
      className="relative py-24 px-4 bg-gradient-to-br from-background/70 to-background/30 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-glow">
            Internships
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Hands-on experience building real-world applications in startup
            environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg group hover:shadow-primary/50 transition-all duration-300"
            >
              <div className="absolute -top-5 -left-5 bg-primary p-3 rounded-full text-white shadow-md">
                <Briefcase className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                {item.role}
              </h3>
              <p className="text-primary font-medium">{item.company}</p>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                {item.duration}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover glow effect border */}
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-primary/70 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
