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
    timeline: "June 2025 — Present",
    description: "A worldwide notes and doodles sharing website, perfect for casual web strolling",
    category: "Web App Development and Product Design for a Social Media App",
    fullDescription: "WorldNotes is a personal passion project created to be a global platform for sharing notes, thoughts, and doodles, perfect for casual web strolling. The platform emphasizes casual discovery and community interaction through creative expression.",
    role: "Lead fullstack developer and web designer, I built this app end-to-end from ideation to launch",
    skills: ["UI/UX Design", "Web Development", "Web Design", "Webflow Development", "Wireframing", "SEO"],
    tools: ["React", "Next.js", "TypeScript", "Three.js", "NoSQL"],
    features: [
      "Dynamic 3D Note Traversal and Discovery Algorithm",
      "FireBase Database Integration",
      "Google Maps Integration",
      "Custom Note Creator Canvas",
      "Personalized User profiles",
      "User Authentication",
    ],
    challenges: "The main challenge was implementing real-time collaboration while maintaining performance with hundreds of concurrent users. We solved this by implementing efficient data structures and optimized WebSocket connections.",
    outcome: "This project is currently in active development with plans to launch a beta version in late 2026.",
    imageUrl: "/worldnotes/thumbnail.png",
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
    description: "Projects from my time at the Wearables and Nearables Technology Laboratory at the University of Illinois Chicago",
    category: "Fullstack Development and UI/UX Design for Wearable Health Monitoring Devices",
    fullDescription: "Here are my projects from partaking in the Wearables and Nearables Technology Laboratory at the University of Illinois Chicago. Through interdispilinary groups of Biomedical Engineering and Computer Science students, I gained practical experience designing and developing wearable and nearable devices, acquisitioning and processing a diverse set of sensor data, and designing and developing user-friendly interfaces. Each project was developed in under two weeks of development and presented through a series of live demos.",
    tools: ["React", "Node.js", "Processing", "C#", "Arduino", "Figma"],
    features: [
      "Motion Tracking",
      "Real-time Data Visualization",
      "Time tracking and reporting",
      "Analytics Dashboards",
      "Custom Alerts and Notifications",
    ],
    challenges: "Creating an intuitive interface that could handle complex project hierarchies while remaining accessible to users of all technical levels.",
    outcome: "Successfully developed 5 different wearable biomedical devices that monitor various health metrics, each successfully tested and validated in real-world scenarios.",
    imageUrl: "/biomed_devices/thumbnail.png",
    githubUrl: "https://github.com/cnakha/Wearable_Biomedical_Devices",
    timeline: "Jan 2025 — May 2025",
    role: "Fullstack Developer and UI/UX Designer",
    skills: ["UI/UX Design", "Entrepreneurship", "Internet of Things", "Prototyping", "Hardware Engineering", "Product Design", "User Testing"],
    problem: "How can we leverage wearable technology to provide continuous, real-time health monitoring that is both accurate and user-friendly to aid in fields such as sports, fitness, medicine, assistive tech, and rehabilitation?",
    subProblem: "Many existing health monitoring devices are either too complex for everyday users or lack the precision needed for medical applications. There is a need for devices that can seamlessly integrate into daily life while providing reliable health data.",
    solution: "I developed several wearable biomedical devices that utilize advanced sensors and machine learning algorithms to monitor vital signs such as heart rate, oxygen levels, stress, and activity patterns. The devices are designed with user comfort in mind, featuring ergonomic designs and intuitive interfaces. Additionally, I created companion mobile apps that provide real-time data visualization and alerts, ensuring users can easily track their health metrics and receive timely notifications for any anomalies.",
  },
  {
    id: "YCGH",
    title: "You Can Grow Here: A Therapeutic VR Journey for Anxiety Management",
    description: "An immersive virtual reality experience that combines theatrical storytelling improvisational design methods and evidence-based wellness techniques to guide users through emotional regulation and anxiety relief, successfully exhibited in UIC's CAVE2 and aligned with the United Nations Sustainable Development Goal of Good Health and Well-Being.",
    category: "Research Poster on VR within Health and Well-Being centered Aplications presented at SIGGRAPH 2025",
    fullDescription: "You Can Grow Here is an immersive VR experience developed for the CAVE2™ environment, aligning with the UN Sustainable Development Goal of Good Health and Well-Being. In response to the mental health challenges intensified by the COVID-19 pandemic, the project explores how interactive storytelling, ambient sound, and 3D typography can support emotional reflection and teach anxiety coping strategies. Built in Unity with custom assets from Blender and Maya, the experience differs from most clinical VR programs, allowing users to independently explore emotions, manage anxiety, and practice evidence-based calming techniques within a safe, narrative-driven space that builds emotional resilience.",
    features: [
      "Interactive 3D Typography",
      "Immersive 3D Environments",
      "Spatial Audio Design",
      "User-driven Narrative Exploration",
      "Evidence-based Anxiety Management Exercises",
      "CAVE2™ Volumetric Theater Integration",
    ],
    challenges: "Designing the user flow and creating story-driven emotional impact with 3D typography as a main actor in our project.",
    outcome: "Our project was successfully exhibited in UIC's CAVE2 with over 50 guests and presented as a research poster at SIGGRAPH 2025, showcasing the potential of VR for mental health support.",
    imageUrl: "/YCGH/thumbnail.png",
    timeline: "Jan 2025 — May 2025",
    role: "VR Developer and UI/UX Designer",
    skills: ["UI/UX Design", "Virtual Reality Development", "Prototyping", "3D Modeling", "User Testing"],
    tools: ["C#", "Unity", "Blender", "Maya", "Figma"],
    problem: "While traditional therapeutic approaches remain vital, there is a growing need for accessible, engaging tools that promote emotional awareness and coping strategies.",
    subProblem: "Anxiety continues to be one of the most prevalent and growing mental health challenges, with 43% of adults in 2024 reporting increased levels compared to the previous year. While traditional therapeutic approaches remain vital, there is a growing need for accessible, engaging tools that promote emotional awareness and coping strategies.",
    solution: "You Can Grow Here (YCGH) was developed to be a narrative-driven virtual reality (VR) experience that leverages interaction, storytelling, and design to foster emotional reflection and support mental well-being.",  
  },
  {
    id: "foliofolds",
    title: "FolioFolds",
    description: "Web app for designing and sharing interactive 3D models of small books, magazines, origamis, zines, and fliers with support for complex folds, bindings, cutouts, and AR viewing",
    category: "Fullstack Development and Web Design",
    fullDescription: "FolioFolds is a personal passion project that is a web application that allows users to design, customize, and share interactive 3D models of various printed forms. The platform supports complex folds, bindings, cutouts, and offers AR viewing capabilities. Users can create their own designs using an intuitive interface, explore a gallery of community creations, and share their work with others.",
    features: [
      "Supports PDF, PNG, and JPEG imports to create 3D models",
      "Intuitive drag-and-drop interface for designing complex folds and bindings",
      "Real-time 3D rendering powered by WebGL",
      "AR viewing capabilities for mobile devices",
      "Embbed models on external websites",
      "User accounts for saving and managing projects",
      "Allows animated and manual page flipping",
    ],
    challenges: "Creating a user-friendly interface that could handle the complexity of 3D modeling while ensuring smooth performance across devices.",
    outcome: "This project is currently in active development with plans to launch a beta version in late 2026.",
    imageUrl: "/foliofolds/thumbnail.png",
    timeline: "Jan 2023 - May 2024",
    role: "Fullstack Developer and UI/UX Designer",
    skills: ["UI/UX Design", "Web Development", "Prototyping", "Wireframing", "User Testing"],
    tools: ["Figma", "React", "Next.js", "Typescript", "Three.js", "WebGL"],
    problem: "How can we dynamically visualize complex 3D structures of printed materials in an intuitive way that is accessible to both designers and general users?",
    subProblem: "Many existing design tools for printed materials are either too complex for casual users or lack the ability to accurately represent intricate folds and bindings in a 3D space. There is a need for a user-friendly platform that bridges the gap between design complexity and accessibility.",
    solution: "Wanting to showcase my intricate class prints digitally in an intuitive and explorative way, I developed FolioFolds, a web application that allows users to create and share interactive 3D models of printed materials. The platform features an intuitive drag-and-drop interface for designing complex folds and bindings, along with real-time 3D rendering powered by WebGL. Users can easily visualize their designs from multiple angles and even view them in augmented reality (AR) using their mobile devices. Additionally, the publications can be flipped through manually and through animation, fostering a vibrant ecosystem of print design enthusiasts.",
  
  },
  {
    id: "clarity",
    title: "Designing For Clarity: A Redesign of Blackboard's User Interface",
    description: "A Publication on Creating Methodologies for Designing Clear and Intuitive User Interfaces",
    category: "Design Research, Methodologies, and UI/UX Design",
    fullDescription: "Designing For Clarity is a comprehensive redesign of Blackboard's user interface, focusing on enhancing usability and accessibility for a diverse user base. The project involved extensive user research on learning management systems, prototyping, and iterative testing to develop a more intuitive and engaging experience. The redesign emphasizes clear navigation, simplified workflows, and improved visual hierarchy, making it easier for users to access course materials, communicate with peers, and manage their academic tasks. The project culminated in a detailed publication outlining the design methodologies employed, challenges faced, and the impact of the redesign on user satisfaction and engagement.",
    features: [
      "User-Centered Design Approach",
      "Comprehensive User Research, Interviewing, and Analysis",
      "Interactive Prototyping and User Testing",
    ],
    challenges: "Balancing the needs of a diverse user base while maintaining a cohesive and intuitive design language that fits the branding and existing design language of the host product.",
    outcome: "The redesign received positive feedback from users during testing, with a 30% increase in task completion rates and a 25% reduction in user errors compared to the original interface. The publication has been well-received, contributing valuable insights into UI/UX design methodologies.",
    imageUrl: "/clarity/thumbnail.png",
    timeline: "Jan 2023 - May 2024",
    role: "Fullstack Developer and UI/UX Designer",
    skills: ["UI/UX Design", "Web Development", "Prototyping", "Wireframing", "User Testing", "User Research", "Interviewing"],
    tools: ["Figma", "Illustrator"],
    problem: "How can we redesign complex user interfaces to enhance clarity and usability for a diverse user base?",
    subProblem: "Many existing user interfaces, particularly in educational platforms like Blackboard, suffer from cluttered out of date layouts and confusing navigation, leading to user frustration and decreased engagement. There is a need for a systematic approach to redesigning these interfaces to improve user experience.",
    solution: "I conducted extensive user research, including interviews and usability testing, to identify pain points in the existing Blackboard interface. Based on these insights, I developed a series of prototypes that focused on simplifying navigation, improving visual hierarchy, and enhancing overall usability. The redesign incorporated clear labeling, intuitive icons, and streamlined workflows to make it easier for users to access course materials and manage their academic tasks. The project culminated in a detailed publication that outlines the design methodologies employed, challenges faced, and the positive impact of the redesign on user satisfaction and engagement.",
  
  }
];