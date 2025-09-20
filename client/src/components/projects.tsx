import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useProjectFilter } from "@/hooks/use-project-filter";
import { useRef } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const { activeFilter, setActiveFilter, filteredProjects } = useProjectFilter(projects);

  useScrollAnimation(titleRef, 'fade-in');
  useScrollAnimation(filtersRef, 'fade-in');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'research', label: 'Research' }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        {/* Project Filters */}
        <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              data-testid={`button-filter-${filter.id}`}
              className={`project-filter px-6 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium ${
                activeFilter === filter.id ? 'active' : ''
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-testid={`project-card-${project.id}`}
              className="project-card bg-card rounded-lg p-6 shadow-lg border border-border opacity-100 transition-all duration-300"
            >
              {project.image && (
                <div className="mb-4">
                  <img 
                    src={`https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250`}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                    data-testid={`img-project-${project.id}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`title-project-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`description-project-${project.id}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    data-testid={`tag-${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {Object.entries(project.links).map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-${type}-${project.id}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors"
                  >
                    {type === 'github' && <i className="fab fa-github mr-2"></i>}
                    {type === 'demo' && <i className="fas fa-external-link-alt mr-2"></i>}
                    {type === 'docs' && <i className="fas fa-book mr-2"></i>}
                    {type === 'paper' && <i className="fas fa-file-pdf mr-2"></i>}
                    {type === 'linkedin' && <i className="fab fa-linkedin mr-2"></i>}
                    {type === 'colab' && <i className="fas fa-code mr-2"></i>}
                    {type === 'youtube' && <i className="fab fa-youtube mr-2"></i>}
                    {type === 'linkedin' ? 'LinkedIn' : 
                     type === 'colab' ? 'Colab' : 
                     type === 'youtube' ? 'YouTube' :
                     type.charAt(0).toUpperCase() + type.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}