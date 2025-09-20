import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef } from "react";

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(titleRef, 'fade-in');
  useScrollAnimation(textRef, 'slide-in-left');
  useScrollAnimation(imageRef, 'slide-in-right');

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="slide-in-left space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dual Master's student in Electrical Engineering (AI/ML) and Data Science 4+1 with a 4.0 GPA across all degrees. Over fifty-six (56) hands-on projects spanning machine learning, automation, hardware design, and software engineering. Passionate about building intelligent, reliable systems at the intersection of ML, hardware, and software.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience spans from semiconductor design and hardware integration to machine learning 
              algorithms and software development. I'm passionate about sustainable technology and 
              creating solutions that make a positive impact.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-experience">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-projects">56+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-technologies">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div ref={imageRef} className="slide-in-right flex justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Saif Elsaady - Professional headshot" 
              className="rounded-lg shadow-xl w-full max-w-md h-80 object-cover"
              data-testid="img-workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
