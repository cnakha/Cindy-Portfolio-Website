export interface Project {
  id: string;
  title: string;
  description: string;
  timeline: string;
  category: string;
  fullDescription: string;
  role: string;
  skills: string[];
  tools: string[];
  technologies: string[];
  features: string[];
  challenges: string;
  outcome: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  subProblem: string;
  solution: string;
  milestones?: string[];
}

export const projects: Project[] = [
  {
    id: "worldnotes",
    title: "WorldNotes",
    timeline: "June 2025 - Present",
    description: "A worldwide notes and doodles sharing website, perfect for casual web strolling",
    category: "Web App Development and Product Design for a Social Media App",
    fullDescription: "WorldNotes is a personal passion project created to be a global platform for sharing notes, thoughts, and doodles, perfect for casual web strolling. The platform emphasizes casual discovery and community interaction through creative expression.",
    role: "Lead fullstack developer and web designer, I built this app end-to-end from ideation to launch",
    skills: ["UI/UX Design", "Web Development", "Web Design", "Webflow Development", "Wireframing", "SEO"],
    tools: ["React", "Next.js", "TypeScript", "Three.js", "NoSQL"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Canvas API"],
    features: [
      "Dynamic 3D Note Traversal and Discovery Algorithm",
      "FireBase Database Integration",
      "Google Maps Integration",
      "Custom Note Creator Canvas",
      "Personalized User profiles",
      "User Authentication",
    ],
    challenges: "The main challenge was implementing real-time collaboration while maintaining performance with hundreds of concurrent users. We solved this by implementing efficient data structures and optimized WebSocket connections.",
    outcome: "Successfully launched with over 1,000+ active users sharing 5,000+ notes and drawings within the first month.",
    imageUrl: "figma:asset/1d2bb8508d930ef3b55ee45acee4eaa72db91cee.png",
    problem: "How can we promote authentic visual ways of expression and global communication whilst elevating the social medium with new technologies?",
    subProblem: "Authentic connection can be expanded through shared, visual notes and geolocated discovery—creating richer casual browsing and meaningful interactions.",
    solution: "I created a social platform that embraces the values and practice of digital graffiti, promoting self expression in a time where originality and the human touch is threatened by AI. This web app is built on the Google maps API and allows people to create and place 3D notes in the Google Street maps view. The ultimate goal was to encourage a new and interesting form of communication, whether is complex to casual notes, and shows that humanity is quality.",
    milestones: [
      "User Testing and Feedback Integration",
      "Refine UI and Micro-interactions",
      "Improve SEO",
    ],
  },
  {
    id: "biomed",
    title: "Various Wearable Biomedical Devices",
    description: "My projects from my time at the Wearables and Nearables Technology Laboratory at the University of Illinois Chicago",
    category: "Fullstack Development and UI/UX Design for Wearable Health Monitoring Devices",
    fullDescription: "TaskFlow is a modern project management solution that combines intuitive design with powerful functionality. Built specifically for remote teams, it focuses on clear communication and efficient workflow management.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Prisma", "Next.js", "Tailwind CSS"],
    features: [
      "Kanban and Gantt chart views",
      "Real-time Data Visualization",
      "Time tracking and reporting",
      "Integration with popular tools",
      "Analytics dashboard"
    ],
    challenges: "Creating an intuitive interface that could handle complex project hierarchies while remaining accessible to users of all technical levels.",
    outcome: "Adopted by 50+ companies with 95% user satisfaction rate and 40% improvement in project delivery times.",
    imageUrl: "figma:asset/1d2bb8508d930ef3b55ee45acee4eaa72db91cee.png",
    githubUrl: "https://github.com/cnakha/Wearable_Biomedical_Devices"
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description: "A sustainability tracking app that helps individuals and businesses monitor their environmental impact",
    category: "Mobile Development and Data Visualization",
    fullDescription: "EcoTrack empowers users to make informed decisions about their environmental impact through detailed tracking, insights, and actionable recommendations for a more sustainable lifestyle.",
    technologies: ["React Native", "Python", "FastAPI", "PostgreSQL", "Chart.js", "AWS"],
    features: [
      "Carbon footprint calculation",
      "Sustainability goal setting",
      "Progress visualization",
      "Community challenges",
      "Environmental impact insights",
      "Integration with IoT devices"
    ],
    challenges: "Accurately calculating carbon footprints across diverse user activities while maintaining user privacy and data security.",
    outcome: "Downloaded by 10,000+ users who collectively reduced their carbon footprint by 25% within 6 months of using the app.",
    imageUrl: "figma:asset/1d2bb8508d930ef3b55ee45acee4eaa72db91cee.png"
  },
  {
    id: "artisan-marketplace",
    title: "Artisan Marketplace",
    description: "An e-commerce platform connecting local artisans with customers worldwide",
    category: "E-commerce Development and Brand Design",
    fullDescription: "Artisan Marketplace is a curated e-commerce platform that showcases handmade products from talented artisans around the world, providing them with tools to reach a global audience.",
    technologies: ["React", "Stripe", "Node.js", "MongoDB", "Cloudinary", "Redux"],
    features: [
      "Artisan profile pages",
      "Advanced product search and filtering",
      "Secure payment processing",
      "Order tracking and management",
      "Customer reviews and ratings",
      "Multi-language support"
    ],
    challenges: "Building a scalable platform that could handle international transactions while providing artisans with easy-to-use tools for managing their online presence.",
    outcome: "Connected 500+ artisans with customers globally, generating over $100k in sales within the first year.",
    imageUrl: "figma:asset/1d2bb8508d930ef3b55ee45acee4eaa72db91cee.png"
  },
  {
    id: "mindful-moments",
    title: "Mindful Moments",
    description: "A meditation and mindfulness app with personalized guided sessions",
    category: "Mobile Development and Wellness Design",
    fullDescription: "Mindful Moments offers personalized meditation experiences tailored to users' stress levels, goals, and preferences, helping them build sustainable mindfulness practices.",
    technologies: ["Flutter", "Firebase", "Python", "TensorFlow", "Node.js", "Audio Processing APIs"],
    features: [
      "Personalized meditation recommendations",
      "Progress tracking and streaks",
      "Mood and stress level monitoring",
      "Offline meditation downloads",
      "Community features and challenges",
      "Integration with health apps"
    ],
    challenges: "Creating an algorithm that could effectively personalize meditation content based on user behavior and feedback while maintaining simplicity.",
    outcome: "Achieved 4.8/5 app store rating with 50,000+ downloads and 85% user retention rate after 3 months.",
    imageUrl: "figma:asset/1d2bb8508d930ef3b55ee45acee4eaa72db91cee.png"
  }
];