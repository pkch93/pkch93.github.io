export interface Author {
  name: string;
  role: string;
  summary: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  achievements: string[];
}

export interface ProjectItem {
  name: string;
  period: string;
  description: string;
  stack: string;
  details: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface CertificateItem {
  title: string;
  date: string;
}

export interface SiteMetadata {
  title: string;
  author: Author;
  contact: Contact;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
}
