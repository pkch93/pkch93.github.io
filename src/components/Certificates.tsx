import * as React from "react"
import type { CertificateItem } from "../types"

interface Props {
  certificates: CertificateItem[];
}

const Certificates: React.FC<Props> = ({ certificates }) => {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section className="mb-10">
      <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 mb-6">Certificates</h3>
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h4 className="text-lg font-medium text-gray-800">{cert.title}</h4>
            <span className="text-sm text-gray-500 font-mono">{cert.date} 취득</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
