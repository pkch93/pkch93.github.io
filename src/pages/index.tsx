import * as React from "react"
import { graphql, type HeadProps, type PageProps } from "gatsby"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Certificates from "../components/Certificates"
import Footer from "../components/Footer"
import type { SiteMetadata } from "../types"

type DataProps = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const metadata = data.site.siteMetadata;
  const { author, contact, skills, experience, projects, education, certificates } = metadata;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-sm p-10 sm:p-16 border border-gray-100">
        <Header author={author} contact={contact} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Certificates certificates={certificates} />
        <Education education={education} />
      </div>
      <Footer author={author} contact={contact} />
    </main>
  )
}

export default IndexPage

export const Head: React.FC<HeadProps<DataProps>> = ({ data }) => {
  return <title>박경철의 포트폴리오</title>
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        author {
          name
          role
          summary
        }
        contact {
          email
          github
          linkedin
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
        certificates {
          title
          date
        }
      }
    }
  }
`
