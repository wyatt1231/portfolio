import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: '1',
    company: 'N-Compass TV',
    position: 'Full Stack Developer',
    startDate: '2025-01',
    endDate: undefined, // Current position
    location: 'Remote',
    description: 'Developing web management system for digital marketing and advertising. Building custom graphic designer web application for news articles with modern technology stack.',
    achievements: [
      'Developing comprehensive web management system for digital marketing campaigns',
      'Building custom graphic design application for automated news article creation',
      'Implementing responsive user interfaces with modern frontend frameworks',
      'Integrating third-party APIs for enhanced functionality',
      'Optimizing application performance and user experience'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Git']
  },
  {
    id: '2',
    company: 'TUO IT Solutions',
    position: 'Full Stack Developer',
    startDate: '2024-07',
    endDate: '2024-12',
    location: 'Philippines',
    description: 'Returned to develop hospital management solutions with telehealth features. Managed database systems and Windows Server infrastructure while providing deployment and user training.',
    achievements: [
      'Enhanced hospital management system with advanced telehealth capabilities',
      'Managed MySQL and SQL Server database optimization and maintenance',
      'Deployed applications on Windows Server infrastructure',
      'Conducted comprehensive user training sessions for healthcare staff',
      'Implemented security best practices for healthcare data management'
    ],
    technologies: ['C#', 'ASP.NET', 'MySQL', 'SQL Server', 'Windows Server', 'SignalR', 'JavaScript']
  },
  {
    id: '3',
    company: 'Clear Admin People',
    position: 'Full Stack Developer',
    startDate: '2022-01',
    endDate: '2024-07',
    location: 'Remote',
    description: 'Developed comprehensive accounting management solutions with Xero API integration. Worked on construction SaaS projects and migration management systems for business process optimization.',
    achievements: [
      'Developed robust accounting management system with Xero API integration',
      'Built construction industry SaaS solutions for project management',
      'Created migration management system for data transfer and synchronization',
      'Implemented automated reporting and analytics dashboards',
      'Optimized database performance for large-scale business operations'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Xero API', 'Docker', 'Azure', 'Git']
  },
  {
    id: '4',
    company: 'TUO IT Solutions',
    position: 'Full Stack Developer',
    startDate: '2018-12',
    endDate: '2021-12',
    location: 'Philippines',
    description: 'Developed hospital management solutions including telehealth features. Managed databases and Windows Server infrastructure. Handled deployment and conducted user training sessions.',
    achievements: [
      'Developed comprehensive hospital management system from ground up',
      'Implemented telehealth features for remote patient consultations',
      'Managed MySQL and SQL Server databases with high availability requirements',
      'Deployed and maintained applications on Windows Server infrastructure',
      'Provided technical training and support to healthcare professionals'
    ],
    technologies: ['C#', 'ASP.NET MVC', 'Web API', 'MySQL', 'SQL Server', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: '5',
    company: 'University of Mindanao',
    position: 'Instructor/Professor',
    startDate: '2019-03',
    endDate: '2019-08',
    location: 'Philippines',
    description: 'Taught programming and IT courses to university students. Developed communication and leadership skills through teaching experience while sharing technical knowledge.',
    achievements: [
      'Taught programming fundamentals and advanced IT concepts',
      'Developed curriculum for modern web development technologies',
      'Mentored students in software development projects',
      'Enhanced communication and presentation skills through teaching',
      'Fostered collaborative learning environment for technical education'
    ],
    technologies: ['Java', 'C#', 'JavaScript', 'HTML', 'CSS', 'Database Design', 'Software Engineering']
  }
];

export const freelanceProjects = [
  'Learning School Management System - Comprehensive platform for educational institutions',
  'Point of Sales Management System - Retail and inventory management solution',
  'Pet Grooming Inventory and Management System - Specialized business management tool',
  'Online Pet Adoption Platform for Davao City - Community service web application',
  'Barangay Management System - Local government administration tool',
  'Doctor\'s Portal - Healthcare professional management system',
  'Radiology Management System - Medical imaging and reporting platform'
];

export const formatDateRange = (startDate: string, endDate?: string): string => {
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';

  return `${start} - ${end}`;
};

export const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));

  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  }
};