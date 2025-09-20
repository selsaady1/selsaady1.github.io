import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef } from "react";

interface Skill {
  category: string;
  icon: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Programming",
    icon: "fas fa-code",
    items: ["Python", "JavaScript", "C++", "MATLAB"]
  },
  {
    category: "Machine Learning",
    icon: "fas fa-brain",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
  },
  {
    category: "Hardware Design",
    icon: "fas fa-microchip",
    items: ["Arduino", "Raspberry Pi", "PCB Design", "FPGA"]
  },
  {
    category: "Web Development",
    icon: "fas fa-globe",
    items: ["React", "Node.js", "HTML/CSS", "APIs"]
  }
];

export default function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(titleRef, 'fade-in');

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              data-testid={`skill-card-${skill.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="skill-item bg-background rounded-lg p-6 text-center shadow-md border border-border"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className={`${skill.icon} text-accent text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`skill-title-${skill.category.toLowerCase().replace(/\s+/g, '-')}`}>
                {skill.category}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                {skill.items.map((item) => (
                  <div key={item} data-testid={`skill-item-${item.toLowerCase().replace(/[/.]/g, '-')}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
