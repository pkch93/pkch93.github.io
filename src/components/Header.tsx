import * as React from "react"
import type { Author, Contact } from "../types"

interface Props {
  author: Author;
  contact: Contact;
}

const Header: React.FC<Props> = ({ author, contact }) => {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{author.name}</h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">{author.role}</h2>

        <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span>{contact.email}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <a href={`https://${contact.github}`} target="_blank" rel="noreferrer" className="hover:underline">{contact.github}</a>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:underline">{decodeURIComponent(contact.linkedin)}</a>
          </div>
        </div>
      </header>

      <section className="mb-12 text-gray-700 leading-relaxed">
        <p>{author.summary}</p>
      </section>
    </>
  )
}

export default Header
