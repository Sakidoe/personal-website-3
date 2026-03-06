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
    name: 'Encourage',
    description:
      'A Swift iOS daily commitment tracker in SwiftUI, featuring an animated progress ring, trophy system, accessible UI and Apple Calendar integration with EventKit for the Swift Student Code Challenge 2026. ',
    link: 'https://github.com/Sakidoe/Badminton-TriMeet-Calculator',
    photo: '/EncourageMain.png',
    skills: ['Swift Playground', 'Xcode', 'SwiftUI', 'EventKit'],
    id: 'project5',
  },
  {
    name: 'Taskify',
    description:
      'A Svelte web app that integrates Docker, OAuth, Dex, and other technologies to create a task managing calendar app, with clean animations and personal accounts. The Capstone project for Web Programming.',
    link: 'https://github.com/Sakidoe/Taskify',
    photo: '/TaskifyMain.png',
    skills: ['Svelte', 'Docker', 'OAuth', 'Dex', 'Python', 'MongoDB'],
    id: 'project6',
  },
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
    id: 'project4',
  }
  
] 

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'UC Davis WAG(Windows Administration Group)',
    title: 'Assistant Systems Administrator',
    start: 'Nov. 2024',
    end: 'Dec. 2025',
    link: '/blog/Workforce',
    skills: ['Splunk', 'XLS', 'JSON', 'Tenable', 'ServiceNow'],
    id: 'work1',
  },
  {
    company: 'UC Davis Computer Lab Management',
    title: 'Operations Support(OPS)',
    start: 'Jun. 2024',
    end: 'Jun. 2025',
    link: '/blog/OPS',
    skills: ['Linux', 'Bash Scripting', 'Computer Repair/Assembly'],
    id: 'work2',
  }
]

export const EXTRACURRICULARS: Extracurriculars[] = [
  {
    company: 'Badminton Club at UC Davis',
    title: 'Vice President, Webmaster, Travel Coordinator',
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
    title: 'Creating my first iOS App with Swift Playground: Encourage',
    description: 'The journey of creating my very first app, and learning about Swift!',
    link: '/blog/Encourage',
    uid: 'blog-1',
  },
  {
    title: 'The story behind Taskify: an all-in-one task managing calendar application',
    description: 'How we integrated Docker, Oauth, Dex, Python, MongoDB, and Svelte to create a smooth and user-friendly task managing app!',
    link: '/blog/Taskify',
    uid: 'blog-2',
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
