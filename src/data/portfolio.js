// ---------------------------------------------------------------------------
// Portfolio content — edit this file to update the site.
// All sections are driven by the data here so you never touch markup.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Ronald Vincent Bustillo',
  role: 'Back-End Web Developer',
  location: 'Davao City, Philippines',
  phone: '+63 927 027 7397',
  email: 'vbustillo97@gmail.com',
  photo: '/assets/img/profile.jpg',
  summary:
    'Back-end web developer with 5+ years of experience building and maintaining ' +
    'web applications. I focus on clean, well-tested APIs, sensible database design, ' +
    'and keeping servers healthy on AWS. I enjoy turning messy requirements into ' +
    'reliable features that hold up under real use.',
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/vincesanityyy',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ronald-vincent-bustillo-24a535194/',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      url: 'mailto:vbustillo97@gmail.com',
      icon: 'mail',
    },
  ],
};

export const experience = [
  {
    role: 'Back-End Web Developer',
    company: 'Spondise Marketplace',
    location: 'Abu Dhabi, UAE',
    period: 'Feb 2023 – Feb 2026',
    highlights: [
      'Built an intermediary platform linking Sponsors with Creators (e.g. YouTube channels), letting creators pick sponsor listings and integrate promo material into their content.',
      'Owned the back-end: designed and shipped API endpoints, optimised slow queries, and refactored legacy code for maintainability.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'REST', 'AWS'],
  },
  {
    role: 'Back-End Web Developer',
    company: 'The Robot Exchange Ltd',
    location: 'Northern Ireland, UK',
    period: 'Feb 2022 – Jan 2023',
    highlights: [
      'Extended a multi-tenant web application with Laravel + Tailwind CSS, adding features alongside the product team.',
      'Ensured changes were properly tested, scalable, and that bugs were addressed promptly to keep the app robust for end-users.',
    ],
    stack: ['PHP', 'Laravel', 'Tailwind CSS', 'MySQL'],
  },
  {
    role: 'Back-End Web Developer',
    company: 'Next BPO Solutions Inc',
    location: 'Davao City, Philippines',
    period: 'Jul 2021 – Jan 2022',
    highlights: [
      'Built a web app for a Japanese client that generates customised documents and PDFs from user input and applied conditions.',
      'Exposed REST APIs so the app integrated cleanly with several surrounding systems.',
      'Managed the production server and database on AWS, accessed over SSH.',
    ],
    stack: ['PHP', 'Laravel', 'jQuery', 'MySQL', 'AWS'],
  },
  {
    role: 'Back-End Web Developer',
    company: 'AMZN Expand LLC',
    location: 'New York, USA (remote)',
    period: 'Jan 2021 – Oct 2021',
    highlights: [
      'Built data visualisations and dashboards against the Amazon MWS API, including scheduled data calculations and SQL reporting queries.',
      'Owned cron jobs for automated tasks and refined UI/UX based on QA feedback.',
      'Troubleshot and debugged issues end-to-end, coordinating with QA before release.',
    ],
    stack: ['PHP', 'Laravel', 'jQuery', 'Amazon MWS', 'MySQL'],
  },
  {
    role: 'Back-End Web Developer (part-time)',
    company: 'Personal Pulse',
    location: 'United Kingdom (remote)',
    period: 'Jun 2020 – Oct 2020',
    highlights: [
      'Created and maintained modules integrating the GoogleFit API to surface fitness and activity data to users.',
      'Kept the integration secure, efficient, and up to date with the latest GoogleFit capabilities.',
    ],
    stack: ['PHP', 'GoogleFit API', 'REST'],
  },
  {
    role: 'Back-End Web Developer',
    company: 'IdeaHub IT Solutions Provider Inc',
    location: 'Davao City, Philippines',
    period: 'Aug 2019 – Mar 2021',
    highlights: [
      'Maintained and extended a real-estate web application, and provided API endpoints for the mobile team.',
      'Ran staging/production servers and databases on AWS EC2, and used Python + Selenium cron jobs to auto-populate the DB from third-party sources.',
    ],
    stack: ['PHP', 'Laravel', 'Vue.js', 'Python', 'Selenium', 'AWS EC2'],
  },
];

export const education = [
  {
    school: 'University of Mindanao',
    location: 'Davao City, Philippines',
    degree: 'Bachelor of Science in Computer Science',
    period: '2015 – 2019',
  },
];

export const skills = {
  groups: [
    {
      title: 'Languages',
      items: ['PHP', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['Laravel', 'Vue.js', 'jQuery', 'Tailwind CSS', 'Bootstrap', 'AdminLTE'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'DevOps & Tooling',
      items: ['AWS (EC2, RDS)', 'Apache', 'Nginx', 'Linux/Ubuntu', 'SSH', 'Cron', 'Git', 'GitHub', 'Bitbucket', 'Jira'],
    },
    {
      title: 'Integrations',
      items: ['Amazon MWS API', 'GoogleFit API', 'Selenium', 'REST API design'],
    },
    {
      title: 'Workflow',
      items: ['Mobile-first responsive design', 'Cross-browser testing & debugging', 'Agile / Scrum'],
    },
  ],
};

export const projects = {
  personal: [
    {
      name: 'UM HRMDev',
      description:
        'Capstone project — a UM attendance checker for faculty members. Built with Laravel + Vue and deployed on AWS EC2.',
      url: 'https://github.com/VinceSanityyy/capstoneproject',
      tags: ['Laravel', 'Vue', 'AWS'],
    },
    {
      name: 'UMTC Guidance Scheduler',
      description:
        'Capstone project — a UMTC guidance exam scheduler (web + API). Used Laravel Passport for API auth consumed by the mobile app.',
      url: 'https://github.com/VinceSanityyy/GuidanceExam-Scheduler',
      tags: ['Laravel', 'Vue', 'Laravel Passport', 'AWS'],
    },
    {
      name: 'Inventory',
      description:
        'Practice project exploring Laravel 6. Used Vue + AdminLTE 3 as the layout while experimenting with the new framework features.',
      url: 'https://github.com/VinceSanityyy/Inventory',
      tags: ['Laravel', 'Vue', 'AdminLTE'],
    },
    {
      name: 'Spirit FM Web Application',
      description:
        'Side project for Ateneo de Davao. I contributed the inventory module — the one feature the system was missing.',
      url: 'https://github.com/VinceSanityyy/gipatiwas',
      tags: ['Laravel', 'Vue'],
    },
    {
      name: 'Web Scraper',
      description:
        'A set of web-scraping experiments across multiple sites. Some are incomplete — they were explorations using Python + Selenium.',
      url: 'https://github.com/VinceSanityyy/python_scrape_practice',
      tags: ['Python', 'Selenium'],
    },
  ],
  work: [
    {
      name: 'Propnex',
      description:
        'Singapore-based real-estate site. I worked mostly on the back-end and deployment, using Yii 1 (a PHP framework) + jQuery.',
      url: 'https://www.propnex.com/',
      tags: ['Yii 1', 'jQuery'],
    },
    {
      name: 'Propnex Admin',
      description:
        'A CMS to manage content shown on the main Propnex site. Built with Nuxt.js on top of company-provided APIs, with Bootstrap for the front-end.',
      url: 'https://admin.propnex.net/login/',
      tags: ['Nuxt.js', 'Bootstrap'],
    },
    {
      name: 'Recon Admin Portal',
      description:
        'A system built on the Amazon MWS API, used by our virtual assistants. I focused on data visualisations, DB queries, and design improvements. Laravel + jQuery.',
      url: 'http://work.legacyseller.com/login',
      tags: ['Laravel', 'jQuery', 'Amazon MWS'],
    },
    {
      name: 'Recon Client Portal',
      description:
        'A client-facing system on the Amazon MWS API (US clients only). I contributed data automation, DB queries, and table structures. Laravel + jQuery.',
      url: 'https://app.legacyseller.com/',
      tags: ['Laravel', 'jQuery', 'Amazon MWS'],
    },
    {
      name: 'Wayleaves Portal',
      description:
        'A multi-tenant application managing agreements for access to power lines, cables, water mains, and gas pipelines — used by multiple clients.',
      url: 'http://enw.wayleavesdev.co.uk/',
      tags: ['Multi-tenancy', 'Laravel'],
    },
    {
      name: 'YU Energy Customer Portal',
      description:
        'A customer portal managing billings, meter readings, and payments based on consumption.',
      url: 'https://portal.yuenergy.co.uk/',
      tags: ['Laravel'],
    },
  ],
};

export const interests =
  'Away from the keyboard I spend most of my time playing video games, ' +
  'and I keep tinkering with side projects to expand what I know.';
