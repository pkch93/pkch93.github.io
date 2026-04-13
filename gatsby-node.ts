import { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes([
    schema.buildObjectType({
      name: "Site",
      fields: {
        siteMetadata: { type: "SiteMetadata" },
      },
      interfaces: ["Node"],
    }),
    schema.buildObjectType({
      name: "SiteMetadata",
      fields: {
        title: { type: "String" },
        siteUrl: { type: "String" },
        author: { type: "Author" },
        contact: { type: "Contact" },
        skills: { type: "[SkillGroup]" },
        experience: { type: "[ExperienceItem]" },
        projects: { type: "[ProjectItem]" },
        education: { type: "[EducationItem]" },
        certificates: { type: "[CertificateItem]" },
      },
    }),
    schema.buildObjectType({
      name: "Author",
      fields: {
        name: { type: "String" },
        role: { type: "String" },
        summary: { type: "String" },
      },
    }),
    schema.buildObjectType({
      name: "Contact",
      fields: {
        email: { type: "String" },
        github: { type: "String" },
        linkedin: { type: "String" },
        location: { type: "String" },
      },
    }),
    schema.buildObjectType({
      name: "SkillGroup",
      fields: {
        category: { type: "String" },
        description: { type: "String" },
        items: { type: "[SkillItem]" },
      },
    }),
    schema.buildObjectType({
      name: "SkillItem",
      fields: {
        name: { type: "String" },
        comment: { type: "String" },
      },
    }),
    schema.buildObjectType({
      name: "ExperienceItem",
      fields: {
        company: { type: "String" },
        period: { type: "String" },
        role: { type: "String" },
        achievements: { type: "[String]" },
      },
    }),
    schema.buildObjectType({
      name: "ProjectItem",
      fields: {
        name: { type: "String" },
        period: { type: "String" },
        description: { type: "String" },
        stack: { type: "String" },
        details: { type: "[String]" },
      },
    }),
    schema.buildObjectType({
      name: "EducationItem",
      fields: {
        school: { type: "String" },
        degree: { type: "String" },
        period: { type: "String" },
      },
    }),
    schema.buildObjectType({
      name: "CertificateItem",
      fields: {
        title: { type: "String" },
        date: { type: "String" },
      },
    }),
  ])
}
