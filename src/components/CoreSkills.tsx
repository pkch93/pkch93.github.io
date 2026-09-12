import * as React from "react"
import type { SkillGroup } from "../types"

interface Props {
  skills: SkillGroup[];
}

const CoreSkills: React.FC<Props> = ({ skills }) => {
  const coreGroup = skills.find(g => g.category === "Core");
  if (!coreGroup) return null;

  return (
    <section className="mb-10">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">핵심 기술 스택</h3>
      <div className="flex flex-wrap gap-2">
        {coreGroup.items.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
            title={item.comment}
          >
            {item.name}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-2 max-w-2xl">{coreGroup.description}</p>
    </section>
  )
}

export default CoreSkills
