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
    skills: ['Python', 'XLSXWriter', 'Automation'],
    id: 'project1',
  },
  {
    name: 'Multi-Agent Bluetooth Network for Agricultural Communication',
    description: 'Built and tested a ESP32 Bluetooth Mesh Network with the main goals of being low cost and minimal risk for bottlenecks. The network is a mixture of a Breadth First Search (BFS) and a Directed Forwarding approach, through C++, coupled with a python command system and a ReactJS Frontend.',
    link: 'https://github.com/UCD-193AB-ws24/Multi-Agent-Communication-Network-v2',
    photo: '/senior_design_poster.png',
    skills: ['C++', 'ESP32', 'Bluetooth Mesh', 'Python', 'React'],
    id: 'project2',
  },
  {
    name: 'UCDavisBadminton.com',
    description: 'A full-stack website built with HTML and SCSs for a smooth, animated, and user-friendly experience to be introduced to the badminton club.',
    link: 'https://ucdavisbadminton.com/',
    photo: '/ucdfrontpage.png',
    skills: ['HTML', 'CSS', 'Full-stack', 'UX'],
    id: 'project3',
  },
  {
    name: 'DUENDavis.com',
    description: 'maintained, updated, and redesigned the DUEN(Davis Undergraduate Engineering Network) TailwindCSS webpage to better reflect the organization and provide a more user-friendly experience for visitors.',
    link: 'https://duendavis.com/',
    photo: '/DUENFrontPage.png',
    skills: ['TailwindCSS', 'Design', 'Maintenance'],
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
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
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

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
