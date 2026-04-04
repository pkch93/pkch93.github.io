import * as React from "react"
import type { ProjectItem } from "../types"

interface Props {
  projects: ProjectItem[];
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <section className="mb-14">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">Projects</h3>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                {project.name}
              </h4>
              <span className="text-sm font-medium text-gray-500">{project.period}</span>
            </div>
            <p className="text-sm text-gray-700 font-medium mb-2">{project.description}</p>
            <div className="mb-3">
              <span className="text-xs font-mono bg-gray-100 border border-gray-200 text-gray-600 px-2 py-1 rounded inline-block">
                {project.stack}
              </span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 text-sm leading-relaxed">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
