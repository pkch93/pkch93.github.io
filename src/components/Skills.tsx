import * as React from "react"
import type { SkillGroup } from "../types"

interface Props {
  skills: SkillGroup[];
}

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <section className="mb-14">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h4 className="font-bold text-gray-800 mb-3">{skillGroup.category}</h4>
            <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm">
              {skillGroup.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
