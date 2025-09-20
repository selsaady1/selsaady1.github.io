import { useState, useMemo } from "react";
import type { Project } from "@/data/projects";

export function useProjectFilter(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [projects, activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects
  };
}
