import * as React from "react"
import type { EducationItem } from "../types"

interface Props {
  education: EducationItem[];
}

const Education: React.FC<Props> = ({ education }) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">Education</h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h4 className="text-lg font-bold text-gray-900">{edu.school}</h4>
              <span className="text-sm text-gray-500">{edu.period}</span>
            </div>
            <p className="text-sm text-gray-700">{edu.degree}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
