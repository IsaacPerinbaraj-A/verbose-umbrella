export const caseStudies = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform Modernization',
    client: 'TechRetail Inc.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    problem: 'TechRetail was struggling with an outdated e-commerce platform that couldn\'t handle increased traffic during peak seasons. The system was slow, difficult to maintain, and couldn\'t support mobile commerce effectively. Cart abandonment rates were high due to poor user experience.',
    solution: 'We rebuilt the entire platform using a modern tech stack with React for the frontend and Node.js for the backend. Implemented a microservices architecture for scalability, added real-time inventory management, and created a seamless mobile experience. Integrated advanced analytics and recommendation engine to improve conversions.',
    results: [
      { metric: 'Page Load Speed', value: '75% faster' },
      { metric: 'Conversion Rate', value: '+45% increase' },
      { metric: 'Mobile Sales', value: '+120% growth' },
      { metric: 'Cart Abandonment', value: '-35% reduction' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'Elasticsearch'],
    duration: '6 months'
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Mobile App',
    client: 'HealthCare Solutions',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800',
    problem: 'Healthcare Solutions needed a mobile app to connect patients with healthcare providers, manage appointments, and access medical records. The solution needed to comply with HIPAA regulations while providing an intuitive user experience for patients of all technical levels.',
    solution: 'Developed a cross-platform mobile app using React Native with robust security measures for HIPAA compliance. Implemented end-to-end encryption, secure authentication, and real-time appointment scheduling. Created separate interfaces for patients and providers with role-based access control.',
    results: [
      { metric: 'App Downloads', value: '500K+ in 6 months' },
      { metric: 'User Satisfaction', value: '4.8/5 rating' },
      { metric: 'Appointment Bookings', value: '+200% increase' },
      { metric: 'Patient Engagement', value: '+85% improvement' }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'HIPAA Compliance', 'AWS'],
    duration: '8 months'
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Analytics Dashboard',
    client: 'FinanceFlow',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    problem: 'FinanceFlow\'s existing dashboard was cluttered, difficult to navigate, and didn\'t provide actionable insights. Users struggled to find important information quickly, leading to decreased productivity and user dissatisfaction.',
    solution: 'Redesigned the entire dashboard with a focus on clarity and user experience. Created an intuitive information architecture, implemented data visualization best practices, and added customizable widgets. Conducted user research to understand workflows and designed the interface accordingly.',
    results: [
      { metric: 'Task Completion Time', value: '-60% reduction' },
      { metric: 'User Satisfaction', value: '+90% increase' },
      { metric: 'Feature Adoption', value: '+150% improvement' },
      { metric: 'Support Tickets', value: '-50% reduction' }
    ],
    technologies: ['Figma', 'React', 'D3.js', 'Chart.js', 'TypeScript'],
    duration: '4 months'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Infrastructure Migration',
    client: 'DataSync Corp',
    category: 'Cloud & DevOps',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    problem: 'DataSync Corp was running critical applications on on-premise servers that were expensive to maintain and couldn\'t scale. They needed to migrate to the cloud while ensuring zero downtime and maintaining security compliance.',
    solution: 'Planned and executed a phased migration to AWS with a hybrid approach during transition. Implemented infrastructure as code using Terraform, set up CI/CD pipelines, and configured auto-scaling. Established monitoring and alerting systems for proactive issue detection.',
    results: [
      { metric: 'Infrastructure Cost', value: '-40% reduction' },
      { metric: 'Deployment Time', value: '-80% faster' },
      { metric: 'System Uptime', value: '99.9% SLA' },
      { metric: 'Scalability', value: '10x capacity increase' }
    ],
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana'],
    duration: '5 months'
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Customer Support',
    client: 'ServicePro',
    category: 'AI / ML Solutions',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    problem: 'ServicePro was receiving thousands of customer support inquiries daily, overwhelming their support team. Response times were slow, and many queries were repetitive. They needed a solution to handle common questions automatically while maintaining high customer satisfaction.',
    solution: 'Developed an intelligent chatbot using natural language processing and machine learning. The AI system understands customer intent, provides accurate answers from a knowledge base, and escalates complex issues to human agents. Continuously learns from interactions to improve responses.',
    results: [
      { metric: 'Response Time', value: '-95% faster' },
      { metric: 'Query Resolution', value: '75% automated' },
      { metric: 'Customer Satisfaction', value: '+40% increase' },
      { metric: 'Support Cost', value: '-60% reduction' }
    ],
    technologies: ['Python', 'TensorFlow', 'OpenAI GPT', 'Node.js', 'MongoDB', 'AWS Lambda'],
    duration: '3 months'
  },
  {
    id: 'saas-platform',
    title: 'SaaS Product Platform',
    client: 'WorkFlow Systems',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    problem: 'WorkFlow Systems needed a modern SaaS platform to manage projects, teams, and workflows. The existing solution was fragmented across multiple tools, causing inefficiencies and poor user experience. They required a unified platform with subscription management and multi-tenancy.',
    solution: 'Built a comprehensive SaaS platform from scratch with multi-tenant architecture, subscription billing, and integrated project management tools. Implemented real-time collaboration features, advanced reporting, and third-party integrations. Created both web and mobile applications.',
    results: [
      { metric: 'User Adoption', value: '10K+ active users' },
      { metric: 'Revenue Growth', value: '+300% in first year' },
      { metric: 'Customer Retention', value: '92% annual retention' },
      { metric: 'Platform Uptime', value: '99.95% availability' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Socket.io', 'AWS'],
    duration: '10 months'
  }
];

