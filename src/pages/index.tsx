import * as React from "react"
import { graphql, type HeadProps, type PageProps } from "gatsby"

interface SiteMetadata {
  title: string;
  author: {
    name: string;
    role: string;
    summary: string;
  };
  contact: {
    email: string;
    github: string;
    location: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    company: string;
    period: string;
    role: string;
    achievements: string[];
  }[];
  projects: {
    name: string;
    period: string;
    description: string;
    stack: string;
    details: string[];
  }[];
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
}

type DataProps = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const metadata = data.site.siteMetadata;
  const { author, contact, skills, experience, projects, education } = metadata;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-sm p-10 sm:p-16 border border-gray-100">

        {/* Header */}
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>{contact.location}</span>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12 text-gray-700 leading-relaxed">
          <p>{author.summary}</p>
        </section>

        {/* Skills */}
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

        {/* Experience */}
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

        {/* Projects */}
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

        {/* Education */}
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

      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 mb-6 text-center">
        <div className="text-sm font-bold text-gray-500 tracking-wider mb-4">QUICK LINKS</div>
        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 text-sm text-gray-600 mb-6">
          <a href={`https://${contact.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gray-900">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            GitHub
          </a>
        </div>
        <p className="text-xs text-gray-400">© 2026 {author.name}. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: React.FC<HeadProps<DataProps>> = ({ data }) => {
  return <title>{data.site.siteMetadata.title}</title>
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        author {
          name
          role
          summary
        }
        contact {
          email
          github
          location
        }
        skills {
          category
          items
        }
        experience {
          company
          period
          role
          achievements
        }
        projects {
          name
          period
          description
          stack
          details
        }
        education {
          school
          degree
          period
        }
      }
    }
  }
`
