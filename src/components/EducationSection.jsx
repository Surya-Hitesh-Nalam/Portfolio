import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, TimerIcon, School } from "lucide-react";

export default function EducationSection() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science-Data Science",
      institution: "NRI Institute of Technology",
      location: "Agiripalli, India",
      period: "2022 - 2026",
      description:
        "Pursuing final year B.Tech in Computer Science specialized in DataScience. Developed a solid foundation in software development, data structures, algorithms, and web technologies.",
      achievements: ["Current CGPA : 9.1"],
      color: "from-blue-500 to-indigo-500",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Chaitanya Junior College",
      location: "Vijayawada, India",
      period: "2020 - 2022",
      description:
        "Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC) which built a strong foundation in analytical thinking and problem-solving which supported my transition into the field of technology and programming.",
      achievements: ["Percentage Scored: 91%"],
      color: "from-purple-500 to-pink-500",
      icon: <Award className="h-5 w-5" />,
    },
    {
      degree: "Secondary Education [SSC]",
      institution: "Narayana E-Techno School",
      location: "Vijayawada, India",
      period: "2019 - 2020",
      description:
        "Completed Secondary School Education (SSC) in first-class, with a focus on core subjects like Mathematics, Science, and English. Built a strong academic foundation and developed key skills in logical thinking and communication.",
      achievements: ["Percentage Scored: 98%"],
      color: "from-green-500 to-emerald-500",
      icon: <School className="h-5 w-5" />,
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-glow">
            Academic Journey
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            My educational background and qualifications that have shaped my
            technical expertise.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary rounded-full"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-24"
            >
              {/* Floating Dot with Pulse */}
              <div className="absolute top-[-20px] md:top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 z-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-70"></div>
                  <div className="relative z-10 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Year Badge */}
              <div className={`hidden md:flex absolute top-0 left-1/2 transform mt-20 ${index % 2 !== 0 ? "left-[25.5rem]" : ""} bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium z-10`}>
                {item.period}
              </div>

              {/* Card */}
              <div className={`mt-28 grid grid-cols-1 md:grid-cols-2 gap-6 ${index % 2 === 0 ? "md:grid-flow-dense" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                >
                  <div className="p-6 shadow-xl transition-all duration-300 border-2 border-primary rounded-xl bg-background/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`rounded-full p-2 bg-gradient-to-r ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                    </div>

                    <div className="mb-4">
                      <div className="text-lg font-medium">{item.institution}</div>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <TimerIcon className="mr-2 h-4 w-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="mr-2 h-4 w-4" />
                        {item.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
