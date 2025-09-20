import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef } from "react";

interface ContactInfo {
  type: string;
  icon: string;
  title: string;
  value: string;
  link?: string;
  testId: string;
}

const contactInfo: ContactInfo[] = [
  {
    type: "email",
    icon: "fas fa-envelope",
    title: "Email",
    value: "selsaady27@gmail.com",
    link: "mailto:selsaady27@gmail.com",
    testId: "contact-email"
  },
  {
    type: "linkedin",
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    value: "Saif S. Elsaady",
    link: "https://www.linkedin.com/in/saif-s-elsaady-78091425a/",
    testId: "contact-linkedin"
  },
  {
    type: "github",
    icon: "fab fa-github",
    title: "GitHub",
    value: "selsaady1",
    link: "https://github.com/selsaady1",
    testId: "contact-github"
  },
  {
    type: "location",
    icon: "fas fa-map-marker-alt",
    title: "Location",
    value: "Available for Remote Work",
    testId: "contact-location"
  }
];

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(titleRef, 'fade-in');

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaboration projects, 
            or just having a conversation about technology and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info) => (
            <div
              key={info.type}
              data-testid={`contact-card-${info.type}`}
              className="bg-background rounded-lg p-6 text-center shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className={`${info.icon} text-accent text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`contact-title-${info.type}`}>
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  data-testid={info.testId}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  {info.value}
                </a>
              ) : (
                <span
                  data-testid={info.testId}
                  className="text-muted-foreground text-sm"
                >
                  {info.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
