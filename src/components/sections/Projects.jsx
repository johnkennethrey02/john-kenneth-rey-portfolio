import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Selected work"
          subtitle="Academic projects across development, systems administration, and testing. Click any screenshot to view it full-screen."
        />

        <div className="space-y-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
