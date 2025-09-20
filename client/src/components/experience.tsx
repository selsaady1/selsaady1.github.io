import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef } from "react";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  animationType: 'slide-in-left' | 'slide-in-right';
}

const experiences: ExperienceItem[] = [
  {
    id: "masters-ai-ml",
    title: "Master's in Electrical Engineering (AI/ML)",
    company: "University Institution",
    period: "2023 - Present",
    description: "Dual Master's program focusing on AI/ML applications in electrical engineering. Maintaining 4.0 GPA while conducting research in neural network optimization.",
    animationType: "slide-in-left"
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    company: "University Research Lab",
    period: "2022 - Present",
    description: "Leading research projects in machine learning optimization and hardware-software integration. Published findings in peer-reviewed conferences.",
    animationType: "slide-in-right"
  },
  {
    id: "engineering-intern",
    title: "Engineering Intern",
    company: "Tech Company",
    period: "Summer 2022",
    description: "Developed automated testing systems and contributed to IoT device firmware. Improved system efficiency by 25% through optimization algorithms.",
    animationType: "slide-in-left"
  }
];

export default function Experience() {
  const titleRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useScrollAnimation(titleRef, 'fade-in');
  
  experiences.forEach((_, index) => {
    useScrollAnimation(
      { current: itemRefs.current[index] },
      experiences[index].animationType
    );
  });

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                ref={(el) => itemRefs.current[index] = el}
                className={`timeline-item relative pl-8 border-l-2 border-muted ${experience.animationType}`}
                data-testid={`experience-item-${experience.id}`}
              >
                <div className="bg-card rounded-lg p-6 shadow-md border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground" data-testid={`experience-title-${experience.id}`}>
                      {experience.title}
                    </h3>
                    <span className="text-sm text-muted-foreground" data-testid={`experience-period-${experience.id}`}>
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2 font-medium" data-testid={`experience-company-${experience.id}`}>
                    {experience.company}
                  </p>
                  <p className="text-muted-foreground" data-testid={`experience-description-${experience.id}`}>
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
