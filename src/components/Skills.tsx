import * as React from "react"
import type { SkillGroup } from "../types"

interface Props {
  skills: SkillGroup[];
}

const Skills: React.FC<Props> = ({ skills }) => {
  const coreGroup = skills.find(g => g.category === "Core");
  const otherGroups = skills.filter(g => g.category !== "Core");

  return (
    <section className="mb-14">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">Skills</h3>

      {coreGroup && (
        <div className="mb-8">
          <h4 className="font-bold text-lg text-gray-800 mb-1">{coreGroup.category}</h4>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">{coreGroup.description}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-gray-600 text-sm">
            {coreGroup.items.map((item, idx) => (
              <li key={idx} className="flex flex-col">
                <span className="font-semibold text-gray-700 flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                  {item.name}
                </span>
                <span className="text-xs text-gray-500 ml-3.5 mt-0.5">{item.comment}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {otherGroups.map((skillGroup, index) => (
          <div key={index}>
            <h4 className="font-bold text-lg text-gray-800 mb-1">{skillGroup.category}</h4>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">{skillGroup.description}</p>
            <ul className="space-y-3 text-gray-600 text-sm">
              {skillGroup.items.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-semibold text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500 ml-3.5 mt-0.5">{item.comment}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
