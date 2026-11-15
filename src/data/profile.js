/**
 * Central place for all personal content.
 * Edit the values below to update the site — components read from here.
 */

export const profile = {
  name: 'John Kenneth Rey',
  shortName: 'JK',
  roles: ['Web Developer', 'IT Project Management', 'Systems Administration'],

  // Short hero introduction. Replace with your own words any time.
  intro:
    'IT student focused on technical support, systems administration, and software testing — with hands-on experience leading a capstone development team, setting up a Windows Server domain environment, and building web applications.',

  location: 'Bulacan, Philippines',

  // About section — every statement here is based on your own projects and CV.
  about: {
    paragraphs: [
      'I’m an Information Technology student at Bulacan State University – Sarmiento Campus, and a Dean’s Lister for three consecutive years. My interests are in technical support, systems administration, software testing, and system monitoring and maintenance.',
      'For our capstone, ForgeCast — a point-of-sale and inventory management system with sales prediction for a hardware business — I served as Project Manager. I coordinated our five-member team, acted as the link between the client and the developers, and produced the system design documentation, including process flows, data flow diagrams, and use case diagrams.',
      'In a separate systems administration project, I built a Windows Server 2022 domain environment in VirtualBox: I set up Active Directory and DNS, joined five department workstations to the domain, organized users into OUs and security groups, applied Group Policies, and secured department shared folders with share and NTFS permissions. I’ve also built CRUD applications using PHP with MySQL, and Java.',
    ],
    facts: [
      { icon: 'education', label: 'Education', value: 'BS Information Technology', detail: 'BulSU – Sarmiento Campus · 2023 – Present' },
      { icon: 'role', label: 'Capstone Role', value: 'Project Manager', detail: 'ForgeCast POS & Inventory System' },
      { icon: 'location', label: 'Location', value: 'Bulacan, Philippines' },
      { icon: 'languages', label: 'Languages', value: 'English, Tagalog' },
      { icon: 'honors', label: 'Academic Honors', value: 'Dean’s Lister', detail: 'Three consecutive years' },
      { icon: 'certification', label: 'Certification', value: 'Introduction to Cybersecurity', detail: 'Cisco Networking Academy · 2026' },
    ],
    interests: ['Technical Support', 'Systems Administration', 'Software Testing', 'Monitoring & Maintenance'],
  },

  contact: {
    email: 'johnkennethrey02@gmail.com',
    availability: 'Open to entry-level IT roles',
    message:
      'I’m looking for an entry-level IT job where I can grow — especially in IT support, systems administration, or software testing. I’m also open to OJT and internship opportunities. If you have an opening or would like to know more about my work, feel free to send me an email.',
    openTo: ['Entry-Level IT Roles', 'IT Support', 'Systems Administration', 'Software Testing', 'OJT / Internship'],
  },

  // Social profiles (shown in the hero, Contact section, and footer)
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/johnkennethrey02' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/john-kenneth-rey-31681944b' },
  ],
}

// Section anchors used by the navbar and footer.
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
