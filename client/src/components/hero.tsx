import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(textRef, 'fade-in');
  useScrollAnimation(imageRef, 'slide-in-right');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="fade-in space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-accent">Saif Elsaady</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Data Scientist & Electrical Engineer
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Specializing in AI/ML, Hardware Development, and Software Engineering. 
              Passionate about creating innovative solutions that bridge the gap between 
              hardware and software technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                data-testid="button-view-projects"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-accent transition-colors btn-hover-effect"
              >
                View Projects
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-primary bg-transparent border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors btn-hover-effect"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div ref={imageRef} className="slide-in-right flex justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Saif Elsaady - Professional headshot" 
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-card"
              data-testid="img-profile"
            />
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
