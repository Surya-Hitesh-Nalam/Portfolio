import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software Developer",
    "AI Enthusiast",
    "DSA Problem Solver",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDelay1 {
          0%, 20% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDelay2 {
          0%, 40% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDelay3 {
          0%, 60% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDelay4 {
          0%, 80% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes typeWriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fadeInDelay1 1.2s ease-out forwards;
        }

        .animate-fade-in-delay-2 {
          animation: fadeInDelay2 1.6s ease-out forwards;
        }

        .animate-fade-in-delay-3 {
          animation: fadeInDelay3 2s ease-out forwards;
        }

        .animate-fade-in-delay-4 {
          animation: fadeInDelay4 2.4s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-left {
          animation: slideLeft 1s ease-out forwards;
        }

        .role-text {
          display: inline-block;
          position: relative;
          animation: fadeInOut 3s ease-in-out;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .letter {
          display: inline-block;
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }

        .letter:nth-child(1) { animation-delay: 0.05s; }
        .letter:nth-child(2) { animation-delay: 0.1s; }
        .letter:nth-child(3) { animation-delay: 0.15s; }
        .letter:nth-child(4) { animation-delay: 0.2s; }
        .letter:nth-child(5) { animation-delay: 0.25s; }
        .letter:nth-child(6) { animation-delay: 0.3s; }
        .letter:nth-child(7) { animation-delay: 0.35s; }
        .letter:nth-child(8) { animation-delay: 0.4s; }

        @media (prefers-reduced-motion: reduce) {
          .animate-float { animation: none; }
        }
      `}</style>

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">
              {"Hi, I'm ".split('').map((char, i) => (
                <span key={i} className="letter">{char}</span>
              ))}
            </span>
            <span className="block mt-2">
              <span className="gradient-text text-4xl md:text-6xl opacity-0 animate-fade-in-delay-2">
                Surya Hitesh
              </span>
            </span>
          </h1>

          <div className="h-10 opacity-0 animate-fade-in-delay-3">
            <p className="text-2xl md:text-3xl font-semibold text-gray-300">
              <span key={currentRole} className="role-text gradient-text">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-400 max-w-xl opacity-0 animate-fade-in-delay-3">
            Crafting elegant solutions through code, passionate about algorithms, and building scalable full-stack applications
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center opacity-0 animate-slide-left">
          <div className="animate-float motion-safe:animate-float">
            <img
              src="/Group.png"
              alt="Hero Graphic"
              className="w-[280px] md:w-[400px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-purple-400" />
      </div>
    </section>
  );
};