import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container max-w-6xl mx-auto flex flex-row items-center justify-between z-10">
        {/* Text Section - Left */}
        <div className="text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Surya</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Hitesh</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
            I am an aspiring software developer
          </p>

          <div className="animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">View My Work</a>
          </div>
        </div>

        {/* Image Section - Right */}
       <div className="block animate-floating">
  <img
    src="/Group.png"
    alt="Hero Graphic"
    className="w-[300px] md:w-[450px] h-auto mx-auto animate-float"
  />
</div>

      </div>

      {/* Scroll Indicator - Center Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
