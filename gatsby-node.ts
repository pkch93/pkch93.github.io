import { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Site implements Node {
      siteMetadata: SiteMetadata
    }

    type SiteMetadata {
      title: String
      siteUrl: String
      author: Author
      contact: Contact
      skills: [SkillGroup]
      experience: [ExperienceItem]
      projects: [ProjectItem]
      education: [EducationItem]
      certificates: [CertificateItem]
    }

    type Author {
      name: String
      role: String
      summary: String
    }

    type Contact {
      email: String
      github: String
      linkedin: String
      location: String
    }

    type SkillGroup {
      category: String
      description: String
      items: [SkillItem]
    }

    type SkillItem {
      name: String
      comment: String
    }

    type ExperienceItem {
      company: String
      period: String
      role: String
      achievements: [String]
    }

    type ProjectItem {
      name: String
      period: String
      description: String
      stack: String
      details: [String]
    }

    type EducationItem {
      school: String
      degree: String
      period: String
    }

    type CertificateItem {
      title: String
      date: String
    }
  `)
}
