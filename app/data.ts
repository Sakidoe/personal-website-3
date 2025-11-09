type Project = {
  name: string
  description: string
  link: string
  photo?: string
  skills?: string[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  skills?: string[]
  id: string
}

type Extracurriculars = {
  company: string
  title: string
  start: string
  end: string
  link: string
  skills?: string[]
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Badminton Trimeet',
    description:
      'A Python backend script that takes .xlsx team rosters, and produces a scriptable and user-friendly match schedule. Cuts the Trimeet scheduling process from ~2 hours to 5 minutes or less.',
    link: 'https://github.com/Sakidoe/Badminton-TriMeet-Calculator',
    photo: '/BadmintonTrimeet.png',
    skills: ['Python', 'XLSXWriter', '.JSON', 'openpyxl'],
    id: 'project1',
  },
  {
    name: 'Multi-Agent Bluetooth Network for Agricultural Communication',
    description: 'Built and tested an ESP32 Bluetooth Mesh Network in C++ with a Directed Forwarding/Breadth-First Search hybrid approach, complemented by a Python command system and a ReactJS frontend, for strawberry farmers @ UC Davis.',
    link: 'https://github.com/UCD-193AB-ws24/Multi-Agent-Communication-Network-v2',
    photo: '/senior_design_poster.png',
    skills: ['C++', 'ESP32 Low-Energy', 'Directed Forwarding', 'Python', 'ReactJS'],
    id: 'project2',
  },
  {
    name: 'UCDavisBadminton.com',
    description: 'A full-stack website built with HTML and SCSs for a smooth, animated, and user-friendly experience to be introduced to the badminton club.',
    link: 'https://ucdavisbadminton.com/',
    photo: '/ucdfrontpage.png',
    skills: ['HTML', 'CSS', 'SCSS'],
    id: 'project3',
  },
  {
    name: 'DUENDavis.com',
    description: 'maintained, updated, and redesigned the DUEN(Davis Undergraduate Engineering Network) TailwindCSS webpage to better reflect the organization and provide a more user-friendly experience for visitors.',
    link: 'https://duendavis.com/',
    photo: '/DUENFrontPage.png',
    skills: ['TailwindCSS', 'ReactJS'],
    id: 'project3',
  }
  
] 

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'UC Davis WAG(Windows Administration Group)',
    title: 'Assistant Systems Administrator',
    start: '2024',
    end: 'Present',
    link: '/blog/Workforce',
    skills: ['Splunk', 'XLS', 'JSON', 'Tenable', 'ServiceNow'],
    id: 'work1',
  },
  {
    company: 'UC Davis Computer Lab Management',
    title: 'Operations Support(OPS)',
    start: '2023',
    end: '2025',
    link: '/blog/OPS',
    skills: ['Linux', 'Bash Scripting', 'Computer Repair/Assembly'],
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const EXTRACURRICULARS: Extracurriculars[] = [
  {
    company: 'Badminton Club at UC Davis',
    title: 'Vice President, Webmaster, Social Chair',
    start: '2022',
    end: 'Present',
    link: '/blog/Badminton',
    id: 'extra1',
  },
  {
    company: 'Davis Undergraduate Engineering Network(Formally Theta Tau)',
    title: 'Program Manager/Officer',
    start: '2024',
    end: '2025',
    link: '/blog/DUEN',
    id: 'extra2',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Badminton @ UCD',
    description: 'A Temporary Blog section for later!',
    link: '/blog/Badminton',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Sakidoe',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/sakidorh',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ridhuang/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/richard.huang_/',
  },
]

export const EMAIL = 'huangrichard74@gmail.com'
