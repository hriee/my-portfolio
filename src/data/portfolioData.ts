export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'full-time' | 'internship' | 'project';
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  techStack: string[];
  metrics?: string;
  link?: string;
  github?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
  honors?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: 'Harindra Kumar',
    title: 'Senior Full-Stack & Cloud Systems Engineer',
    tagline: 'Designing resilient distributed backends and high-performance web applications.',
    email: 'harindrakrm@gmail.com',
    location: 'San Francisco Bay Area, CA / Remote',
    availability: 'Open to Full-Time Engineering Roles & High-Impact Contracts',
    summary:
      'Full-Stack Software Engineer with 5+ years of experience engineering high-concurrency cloud services, responsive React web platforms, and automated developer tooling. Dedicated to type-safe code, scalable microservices, and human-centered design.',
    stats: [
      { label: 'Years Experience', value: '5+', detail: 'Production systems' },
      { label: 'Cloud Microservices', value: '18+', detail: 'High concurrency' },
      { label: 'Uptime Reliability', value: '99.98%', detail: 'SLA maintained' },
      { label: 'Projects Delivered', value: '24+', detail: 'End-to-end impact' },
    ],
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:harindrakrm@gmail.com',
      twitter: 'https://x.com',
    },
  },

  about: {
    bio: [
      'My journey in software engineering started with a fascination for algorithmic efficiency and systems architecture. Over the past five years, I have grown from building low-level algorithms into architecting cloud-native web systems that handle tens of thousands of simultaneous users.',
      'I specialize in TypeScript, React, Node.js, Python, and containerized cloud environments (GCP/AWS). Whether optimizing database query paths, building intuitive user interfaces, or securing CI/CD pipelines, I prioritize clean maintainable architecture and observable performance.',
      'Outside of shipping production code, I actively explore distributed consensus algorithms, contribute to open-source developer tooling, and mentor aspiring software engineers.',
    ],
    careerGoals:
      'Aiming to join a high-velocity engineering organization where I can architect fault-tolerant distributed platforms, elevate engineering practices, and lead full-stack product initiatives from technical conception to production scale.',
    interests: [
      'Distributed Systems Architecture',
      'High-Performance Web Applications',
      'Database Concurrency & Event Sourcing',
      'Cloud-Native DevOps & Observability',
      'Developer Productivity Tooling',
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science & Engineering',
        institution: 'University School of Information & Technology',
        period: '2017 – 2021',
        location: 'California, USA',
        details: 'Specialization in Distributed Systems, Data Structures & Algorithms, and Computer Networking.',
        honors: 'Summa Cum Laude · Dean\'s Academic Honors List',
      },
    ] as EducationItem[],
    certifications: [
      {
        name: 'Google Cloud Professional Cloud Architect',
        issuer: 'Google Cloud Platform',
        year: '2024',
        credentialId: 'GCP-PCA-89421',
      },
      {
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        year: '2023',
        credentialId: 'AWS-SAA-10398',
      },
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        year: '2023',
        credentialId: 'CKA-77312',
      },
    ] as CertificationItem[],
    skillCategories: [
      {
        category: 'Frontend & UI Engineering',
        description: 'Modern reactive component systems, mobile-first design, and state management.',
        skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite', 'HTML5/CSS3', 'Web Accessibility (WCAG)', 'State Machines'],
      },
      {
        category: 'Backend & Systems',
        description: 'High-throughput microservices, REST & GraphQL APIs, and asynchronous processing.',
        skills: ['Node.js', 'Express', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Kafka', 'GraphQL', 'Drizzle ORM'],
      },
      {
        category: 'Cloud & Infrastructure',
        description: 'Containerized deployment, infrastructure as code, and continuous deployment.',
        skills: ['Docker', 'Kubernetes', 'Google Cloud Platform', 'AWS', 'Terraform', 'CI/CD Pipelines', 'Prometheus', 'Grafana'],
      },
      {
        category: 'Engineering Practices',
        description: 'Rigorous engineering standards for scalable team velocity.',
        skills: ['Test-Driven Development', 'System Design', 'Domain-Driven Design', 'Zero-Downtime Releases', 'Agile & Code Reviews'],
      },
    ] as SkillCategory[],
  },

  experiences: [
    {
      id: 'exp-1',
      role: 'Senior Full-Stack Engineer',
      organization: 'Vanguard Cloud Systems',
      type: 'full-time',
      duration: '2023 – Present',
      location: 'San Francisco, CA (Hybrid)',
      summary:
        'Leading architecture and delivery for real-time telemetry dashboards and scalable distributed API gateways supporting over 120,000 active daily users.',
      achievements: [
        'Architected an event-driven data streaming pipeline using Kafka and Node.js that reduced end-to-end data latency by 42%.',
        'Spearheaded frontend overhaul using React 19 and Tailwind CSS, slashing initial bundle size by 38% and achieving 98+ Lighthouse scores across all pages.',
        'Mentored 6 junior and mid-level engineers through structured code reviews, pair programming, and architectural design docs.',
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Kafka', 'Docker', 'Google Cloud'],
      metrics: '42% lower latency · 120k+ DAU',
      link: 'https://vanguardcloud.example.com',
      github: 'https://github.com',
    },
    {
      id: 'exp-2',
      role: 'Full-Stack Software Engineer',
      organization: 'Nexus Data Technologies',
      type: 'full-time',
      duration: '2021 – 2023',
      location: 'Sunnyvale, CA',
      summary:
        'Engineered responsive web applications and resilient RESTful microservices for automated financial reconciliations and compliance reporting.',
      achievements: [
        'Designed and deployed automated reporting service processing $15M+ daily transactions with zero data loss or discrepancy.',
        'Implemented distributed Redis caching tier that cut database read contention by 65% during peak trading market opens.',
        'Built reusable React component library with WCAG AA compliance and comprehensive Jest/Playwright test suites.',
      ],
      techStack: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Redis', 'AWS ECS', 'Jest'],
      metrics: '65% cache offload · $15M daily volume',
      link: 'https://nexusdata.example.com',
    },
    {
      id: 'exp-3',
      role: 'Software Engineering Intern',
      organization: 'Apex Distributed Labs',
      type: 'internship',
      duration: 'Summer 2020 & Winter 2020',
      location: 'Mountain View, CA',
      summary:
        'Collaborated on database query performance analysis and built internal developer observability CLI tools.',
      achievements: [
        'Created an automated SQL query analysis CLI that identified N+1 queries and slow index scans for engineering squads.',
        'Contributed open-source fixes to internal container provisioning scripts, reducing local developer onboarding time from 2 days to 30 minutes.',
        'Authored technical specification documents and conducted benchmark evaluations across PostgreSQL and CockroachDB clusters.',
      ],
      techStack: ['Python', 'PostgreSQL', 'Docker', 'Bash', 'Linux Systems', 'Git'],
      metrics: '85% faster onboarding · 30+ squad users',
    },
    {
      id: 'exp-4',
      role: 'Lead Architect & Creator',
      organization: 'StreamGrid Distributed Broker (Featured Project)',
      type: 'project',
      duration: '2024',
      location: 'Open Source',
      summary:
        'High-performance distributed pub/sub broker built in Go and TypeScript with Raft consensus and WebSockets streaming.',
      achievements: [
        'Achieved sub-5ms message propagation latency across three geographically distributed nodes under 25,000 msg/sec load.',
        'Developed interactive browser monitoring console in React with real-time partition visualization and consumer lag tracking.',
        'Published comprehensive documentation, Docker Compose quickstarts, and automated stress-test suites.',
      ],
      techStack: ['Go', 'TypeScript', 'React', 'WebSockets', 'Docker', 'Raft Consensus'],
      metrics: '25k msgs/sec · <5ms latency',
      github: 'https://github.com',
      link: 'https://streamgrid.example.com',
    },
    {
      id: 'exp-5',
      role: 'Full-Stack Developer',
      organization: 'DevPulse Code Insights (Featured Project)',
      type: 'project',
      duration: '2023 – 2024',
      location: 'Independent Project',
      summary:
        'Engineering metrics and automated pull request review telemetry platform integrating with GitHub Webhooks.',
      achievements: [
        'Built full OAuth 2.0 GitHub integration with client-side token security and async webhook processing queue.',
        'Implemented dynamic velocity heatmaps and code-churn graphs using Canvas and Tailwind CSS with zero third-party chart bloat.',
        'Utilized by 14 open-source repositories to track cycle time, review latency, and deployment frequency.',
      ],
      techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'GitHub API'],
      metrics: '14 active repos · 100% test coverage',
      github: 'https://github.com',
      link: 'https://devpulse.example.com',
    },
  ] as ExperienceItem[],
};
