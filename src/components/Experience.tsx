import * as React from "react"
import type { ExperienceItem } from "../types"

interface Props {
  experience: ExperienceItem[];
}

const Experience: React.FC<Props> = ({ experience }) => {
  return (
    <section className="mb-14">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">Experience</h3>
      <div className="space-y-10">
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h4 className="text-xl font-bold text-gray-900">{exp.company}</h4>
              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block mt-2 sm:mt-0 w-max">{exp.period}</span>
            </div>
            <div className="text-blue-600 font-semibold mb-3">{exp.role}</div>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 text-sm leading-relaxed">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
