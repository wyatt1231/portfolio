import { Skill } from '../types';

export const skillsData: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 95,
    icon: '⚛️'
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'frontend',
    proficiency: 85,
    icon: '📱'
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'frontend',
    proficiency: 88,
    icon: '🔺'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 90,
    icon: '🔷'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 95,
    icon: '🟨'
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    proficiency: 95,
    icon: '🏗️'
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    proficiency: 90,
    icon: '🎨'
  },
  {
    id: 'scss',
    name: 'SCSS',
    category: 'frontend',
    proficiency: 90,
    icon: '💄'
  },
  {
    id: 'styled-components',
    name: 'Styled-Components',
    category: 'frontend',
    proficiency: 85,
    icon: '💅'
  },
  {
    id: 'redux',
    name: 'Redux',
    category: 'frontend',
    proficiency: 88,
    icon: '🔄'
  },
  {
    id: 'rxjs',
    name: 'RxJS',
    category: 'frontend',
    proficiency: 82,
    icon: '🌊'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 92,
    icon: '🟢'
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'backend',
    proficiency: 90,
    icon: '🔷'
  },
  {
    id: 'aspnet-mvc',
    name: 'ASP.NET MVC',
    category: 'backend',
    proficiency: 88,
    icon: '🌐'
  },
  {
    id: 'aspnet-webapi',
    name: 'ASP.NET Web API',
    category: 'backend',
    proficiency: 88,
    icon: '🔗'
  },
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core',
    category: 'backend',
    proficiency: 85,
    icon: '⚡'
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'backend',
    proficiency: 82,
    icon: '🐘'
  },
  {
    id: 'codeigniter',
    name: 'CodeIgniter',
    category: 'backend',
    proficiency: 80,
    icon: '🔥'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    proficiency: 90,
    icon: '🚂'
  },
  {
    id: 'signalr',
    name: 'SignalR',
    category: 'backend',
    proficiency: 85,
    icon: '📡'
  },
  {
    id: 'socketio',
    name: 'Socket.io',
    category: 'backend',
    proficiency: 88,
    icon: '🔌'
  },

  // Database
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    proficiency: 92,
    icon: '🐬'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 88,
    icon: '🐘'
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'database',
    proficiency: 85,
    icon: '💾'
  },
  {
    id: 'mssql',
    name: 'MSSQL',
    category: 'database',
    proficiency: 90,
    icon: '📊'
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    category: 'database',
    proficiency: 90,
    icon: '🏛️'
  },

  // Tools & Platforms
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    proficiency: 82,
    icon: '🐋'
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'devops',
    proficiency: 85,
    icon: '☁️'
  },
  {
    id: 'windows-iis',
    name: 'Windows IIS',
    category: 'devops',
    proficiency: 88,
    icon: '🖥️'
  },
  {
    id: 'heroku',
    name: 'Heroku',
    category: 'devops',
    proficiency: 80,
    icon: '🟣'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    proficiency: 95,
    icon: '📝'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    proficiency: 95,
    icon: '🐙'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    category: 'tools',
    proficiency: 88,
    icon: '🦊'
  },
  {
    id: 'jira',
    name: 'JIRA',
    category: 'tools',
    proficiency: 85,
    icon: '📋'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    proficiency: 80,
    icon: '🎨'
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'tools',
    proficiency: 78,
    icon: '🌈'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'tools',
    proficiency: 85,
    icon: '🤖'
  },
  {
    id: 'gpt-codex',
    name: 'GPT-5 Codex',
    category: 'tools',
    proficiency: 82,
    icon: '🧠'
  },

  // Integrations
  {
    id: 'paypal',
    name: 'PayPal API',
    category: 'integrations',
    proficiency: 88,
    icon: '💰'
  },
  {
    id: 'paymaya',
    name: 'PayMaya',
    category: 'integrations',
    proficiency: 85,
    icon: '💳'
  },
  {
    id: 'paymongo',
    name: 'PayMongo',
    category: 'integrations',
    proficiency: 85,
    icon: '🏦'
  },
  {
    id: 'xero-api',
    name: 'Xero API',
    category: 'integrations',
    proficiency: 90,
    icon: '📊'
  },
  {
    id: 'rest-api',
    name: 'REST APIs',
    category: 'integrations',
    proficiency: 95,
    icon: '🔗'
  },
  {
    id: 'soap',
    name: 'SOAP',
    category: 'integrations',
    proficiency: 82,
    icon: '🧼'
  },
  {
    id: 'json',
    name: 'JSON',
    category: 'integrations',
    proficiency: 95,
    icon: '📄'
  },
  {
    id: 'xml',
    name: 'XML',
    category: 'integrations',
    proficiency: 88,
    icon: '📋'
  },

  // Methodologies & Soft Skills
  {
    id: 'agile-scrum',
    name: 'Agile/Scrum',
    category: 'soft',
    proficiency: 90,
    icon: '⚡'
  },
  {
    id: 'sdlc',
    name: 'SDLC',
    category: 'soft',
    proficiency: 92,
    icon: '🔄'
  },
  {
    id: 'oop',
    name: 'Object-Oriented Programming',
    category: 'soft',
    proficiency: 95,
    icon: '🧩'
  },
  {
    id: 'design-patterns',
    name: 'Design Patterns',
    category: 'soft',
    proficiency: 88,
    icon: '🎯'
  },
  {
    id: 'leadership',
    name: 'Team Leadership',
    category: 'soft',
    proficiency: 88,
    icon: '👥'
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'soft',
    proficiency: 92,
    icon: '💬'
  },
  {
    id: 'teaching',
    name: 'Teaching & Mentoring',
    category: 'soft',
    proficiency: 90,
    icon: '🎓'
  },
  {
    id: 'project-management',
    name: 'Project Management',
    category: 'soft',
    proficiency: 85,
    icon: '📊'
  },
  {
    id: 'client-engagement',
    name: 'Client Engagement',
    category: 'soft',
    proficiency: 88,
    icon: '🤝'
  }
];

export const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    icon: '💻',
    color: '#667eea'
  },
  backend: {
    title: 'Backend Development',
    icon: '⚙️',
    color: '#f5576c'
  },
  database: {
    title: 'Database & Storage',
    icon: '🗄️',
    color: '#4facfe'
  },
  devops: {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: '#fa709a'
  },
  tools: {
    title: 'Tools & Software',
    icon: '🛠️',
    color: '#5ee7df'
  },
  integrations: {
    title: 'APIs & Integrations',
    icon: '🔗',
    color: '#c471ed'
  },
  soft: {
    title: 'Leadership & Methodologies',
    icon: '🎯',
    color: '#fcb69f'
  }
};

export const getSkillLevel = (proficiency: number): string => {
  if (proficiency >= 90) return 'Expert';
  if (proficiency >= 80) return 'Advanced';
  if (proficiency >= 70) return 'Intermediate';
  if (proficiency >= 60) return 'Beginner';
  return 'Learning';
};