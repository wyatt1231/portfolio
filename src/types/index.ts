export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  linkedIn?: string;
  github?: string;
  website?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft';
  proficiency: number;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  languages_url: string;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  size: number;
  open_issues_count: number;
  private: boolean;
  archived: boolean;
  fork: boolean;
}

export interface ProjectLanguages {
  [language: string]: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  loading: boolean;
}

export interface SectionRefs {
  about: React.RefObject<HTMLElement | null>;
  skills: React.RefObject<HTMLElement | null>;
  experience: React.RefObject<HTMLElement | null>;
  projects: React.RefObject<HTMLElement | null>;
  contact: React.RefObject<HTMLElement | null>;
}

export interface NavigationItem {
  label: string;
  href: string;
  ref: React.RefObject<HTMLElement | null>;
}