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
  features?: string[];
  challenges: string;
  outcome: string;
  imageUrl: string;
  imageUrl2?: string;
  vid?: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  subProblem: string;
  keyProblems?: string[];
  keyProblemDescriptions?: string[];
  solution: string;
  milestones?: string[];
}

export const projects: Project[] = [
{
  id: "worldnotes",
  title: "WorldNotes — Global Canvas for Creative Expression",
  timeline: "June 2025 — Present",
  description: "Blurring the line between social platform and digital graffiti, explore the world through notes and doodles left behind by others on a street map view.",
  category: "Fullstack Web Development and UI/UX Design for a Creative Social Media App",
  fullDescription:
    "WorldNotes is a passion project—A spatial web experiment blending maps, art, and emotion where users share notes, thoughts, and doodles, and then anchor them to a globally shared street view map. Designed for casual web strolling, this web app emphasizes user agency, serendipitous discovery, and building community through creative expression.",
  role: "Project Manager, Lead Fullstack Developer and UI/UX Designer. I built this app end-to-end from ideation to launch",
  skills: ["UI/UX Design", "Fullstack Development", "Web Development", "Web Design", "Webflow Development", "Wireframing", "SEO"],
  tools: ["React", "Next.js", "TypeScript", "Three.js", "NoSQL"],
  challenges: "The main challenge was implementing real-time collaboration while maintaining performance with hundreds of concurrent users. I solved this by implementing efficient data structures and optimized WebSocket connections.",
  outcome: "This project is currently in active development with plans to launch a beta version in late 2026.",
  imageUrl: "/worldnotes/thumbnail.png",
  imageUrl2: "/worldnotes/welcomeScreen.png",
  problem: "Existing social media platforms are losing their genuinity and overall appeal",
  subProblem: "After interviewing a pool of social media creators and everyday users, many say these are the reasons for the rise of disinterest in social media:",
  solution: "I created WorldNotes to embrace the values and practice of digital graffiti: self-expression, pictography, and creativity. Interesting technologies like 3D note placement, drawing tools, and Street View mapping are integrated to create a unique craft-based social media platform.",
  milestones: [
    "User Testing and Feedback Integration",
    "Refine UI and Micro-interactions",
    "Improve SEO",
    "Implement Web-Vital Monitoring System",
  ],
  keyProblems:[
    "Loss of Human Touch and Authenticity",
    "Overly Curated Feeds",
    "Lack of Fresh Approaches to Online Social Interaction"],
  keyProblemDescriptions:[
    "Hyper brand-driven content, the stress of performativity, and the rise of AI-generated posts and bot accounts have diluted the sense of genuine human presence online.",
    "Most platforms use filters and optimized algorithms to maximize user engagement, this  leads to internet addiction and less serendipitous discovery.",
    "Social platforms are beginning to share derivative features and blend into each other. People want new and innovative ways to connect with people online.",
  ],
  },

  {
    id: "biomed",
    title: "Sensing Through Life: A Collection of Wearable Biomedical Devices and Apps",
    description: "Various wearable biomedical devices and UI projects from my time at the Wearables and Nearables Technology Laboratory at the University of Illinois Chicago",
    category: "Fullstack Development, Hardware Assembly, and UI and User Experience Design for Wearable Health Monitoring Devices",
    fullDescription: "Projects from working in the Wearables and Nearables Technology Laboratory at the University of Illinois Chicago. For a semester, I collaborated in an interdisciplinary group of four biomedical engineering and computer science students, gaining practical experience assembling, designing, and developing various wearable and nearable devices. I acquisitioned, processed, and analyzed a diverse set of sensor data, designing and integrating user-friendly interfaces for data visualization. Each project was developed in under two weeks of development and presented through a series of live demos and critques.",
    tools: ["React", "Node.js", "Processing", "Python", "C#", "Arduino", "Figma"],
    challenges: "Creating an intuitive interface that could handle complex project hierarchies while remaining accessible to users of all technical levels.",
    outcome: "Successfully developed 5 different wearable biomedical devices that monitor various health metrics, each successfully tested and validated in real-world scenarios.",
    imageUrl: "/biomed_devices/thumbnail.png",
    imageUrl2: "/biomed_devices/thumbnail.png",
    githubUrl: "https://github.com/cnakha/Wearable_Biomedical_Devices",
    timeline: "Jan 2025 — May 2025",
    role: "Lead Frontend Developer and UI/UX Designer but I was also a Fullstack Developer and Hardware Engineer alongside three other interdisciplinary students from computer science and biomedical engineering backgrounds: Kegan Jones, Rohan Kakarlapudi, and Sufyan Siddiqui",
    skills: ["UI/UX Design", "Fullstack Development", "Entrepreneurship", "Internet of Things", "Prototyping", "Hardware Engineering", "Product Design", "User Testing", "Websockets"],
    problem: "Wearable technology has immense potential to revolutionize personal health tracking, yet many current devices fail to balance accuracy, usability, and seamless integration into everyday life.",
    subProblem: "Listed are a few key problems we identified in the wearable health tech space:",
    solution: "My team developed five wearable bluetooth devices that utilize sensors to monitor biometric data such as heart rate, oxygen levels, stress, and activity patterns. The devices are created with user comfort in mind, featuring ergonomic designs and intuitive user interfaces that provide real-time data visualization and alerts, ensuring users can easily track their health metrics and receive timely notifications on health anomalies.",
    keyProblems:[
      "Lack of Accessible Health Monitoring",
      "Poor Integration into Daily Life",
      "Need for Real-Time, Continuous Monitoring"
    ],
    keyProblemDescriptions:[
      "Many existing health monitoring devices are unaffordable or too complex for everyday users.",
      "There is a gap in designing devices that seamlessly blend into users' routines while maintaining comfort, aesthetics, and continuous operation without disruption.",
      "Current solutions don’t consistently offer real-time, continuous data streams that are accurate and intuitive enough to provide meaningful feedback or alerts."
      ],
    
  },
  {
    id: "YCGH",
    title: "You Can Grow Here: A Therapeutic VR Journey for Anxiety Management",
    description: "Theatrical storytelling, typographic design, and evidence-based wellness techniques to guide users in emotional regulation and anxiety relief (SIGGRAPH 2025).",
    category: "VR Application and Research Paper on VR Applications Centering Health and Well-Being Presented at SIGGRAPH 2025 Convention",
    fullDescription: "You Can Grow Here is an immersive VR experience developed for and exhibited at the CAVE2™ environment in the Electronic Visualization Labratory at the University of Illinois Chicago, aligning with the United Nation's Sustainable Development Goal of Good Health and Well-Being. In response to the mental health challenges intensified by the COVID-19 pandemic, the project explores how interactive storytelling, ambient sound, and 3D typography can support emotional reflection and teach anxiety coping strategies. Built in Unity with custom assets from Blender and Maya, the experience differs from most clinical VR programs, allowing users to independently explore emotions, manage anxiety, and practice evidence-based calming techniques within a safe, narrative-driven space that builds emotional resilience.",
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
    imageUrl2: "/YCGH/interaction2.jpeg",
    vid: "/YCGH/YCGH_Concept_Vid.mp4",
    timeline: "Jan 2025 — May 2025",
    role: "Equal contributing VR Developer and UI/UX Designer along side 3 other interdisciplinary students from computer science and design backgrounds: Hope Jo, Gaeun Lee, Khin Yuupar Myat",
    skills: ["UI/UX Design", "Virtual Reality Development", "Human-Computer Interaction", "Prototyping", "3D Modeling", "User Testing", "Field Research", "Scripting"],
    tools: ["C#", "Unity", "Blender", "Maya", "Figma"],
    problem: "While traditional therapeutic approaches remain vital, there is a growing need for accessible, engaging tools that promote emotional awareness and coping strategies.",
    subProblem: "Anxiety continues to be one of the most prevalent and growing mental health challenges, with 43% of adults in 2024 reporting increased levels compared to the previous year. While traditional therapeutic approaches remain vital, there is a growing need for accessible, engaging tools that promote emotional awareness and coping strategies.",
    solution: "You Can Grow Here (YCGH) was developed to be a narrative-driven virtual reality (VR) experience that leverages interaction, storytelling, and design to foster emotional reflection and support mental well-being.",  
  },
  {
    id: "foliofolds",
    title: "FolioFolds — Interactive 3D Papercraft Made Easy",
    description: "Upload, assemble, and share interactive 3D models of books, cards, zines, origamis, and fliers. Real-time model development of complex folds, bindings, cutouts, with AR viewing support",
    category: "Fullstack Development of 3D Model Editors and Web Design",
    fullDescription: "FolioFolds is a passion project, a web application that allows users to design, customize, and share interactive 3D models of various printed forms. The platform supports complex folds, bindings, cutouts, and offers AR viewing capabilities. Users can create their own designs using an intuitive interface, explore a gallery of community creations, and share their work with others.",
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
    timeline: "Jan 2023 — May 2024",
    role: "Fullstack Developer and UI and User Experience Designer",
    skills: ["UI/UX Design", "Web Development", "Prototyping", "Wireframing", "User Testing"],
    tools: ["Figma", "React", "Next.js", "Typescript", "Three.js", "WebGL"],
    problem: "How can we dynamically visualize complex 3D structures of printed materials in an intuitive way that is accessible to both designers and general users?",
    subProblem: "Many existing design tools for printed materials are either too complex for casual users or lack the ability to accurately represent intricate folds and bindings in a 3D space. There is a need for a user-friendly platform that bridges the gap between design complexity and accessibility.",
    solution: "Wanting to showcase my intricate class prints digitally in an intuitive and explorative way, I developed FolioFolds, a web application that allows users to create and share interactive 3D models of printed materials. The platform features an intuitive drag-and-drop interface for designing complex folds and bindings, along with real-time 3D rendering powered by WebGL. Users can easily visualize their designs from multiple angles and even view them in augmented reality (AR) using their mobile devices. Additionally, the publications can be flipped through manually and through animation, fostering a vibrant ecosystem of print design enthusiasts.",
  
  },
  {
    id: "clarity",
    title: "Designing For Clarity: A Redesign of Blackboard's User Interface",
    description: "A publication on creating methodologies for designing clear and intuitive user interfaces",
    category: "Design Research, Methodology Development, and UI and User Experience Design",
    fullDescription: "Designing For Clarity is a comprehensive redesign of Blackboard's user interface, focusing on enhancing user-flow and accessibility for a diverse user base. The project involved extensive user research, comparative market research on learning management systems, systems prototyping, and iterative user tests to develop a more intuitive and engaging experience. The redesign emphasizes clear navigation, simplified workflows, and improved visual hierarchy, making it easier for users to access course materials, communicate with peers, and manage their academic tasks. The project culminated in a detailed publication outlining the design methodologies employed, challenges faced, and the impact of the redesign on user satisfaction and engagement.",
    features: [
      "User-Centered Design Approach",
      "Comprehensive User Research, Interviewing, and Analysis",
      "Interactive Prototyping and User Testing",
    ],
    challenges: "Balancing the needs of a diverse user base while maintaining a cohesive and intuitive design language that fits the branding and existing design language of the host product.",
    outcome: "The redesign received positive feedback from users during testing, with a 30% increase in task completion rates and a 25% reduction in user errors compared to the original interface. The publication has been well-received, contributing valuable insights into UI/UX design methodologies.",
    imageUrl: "/clarity/thumbnail.png",
    timeline: "Jan 2023 - May 2024",
    role: "Design Reasearcher and User Interface and User Experience Designer",
    skills: ["UI/UX Design", "Web Design", "Prototyping", "Wireframing", "User Testing", "User Research", "Interviewing"],
    tools: ["Adobe CC", "Figma", "Illustrator", "Photoshop"],
    problem: "How can we redesign complex user interfaces to enhance clarity and usability for a diverse user base?",
    subProblem: "Many existing user interfaces, particularly in educational platforms like Blackboard, suffer from cluttered out of date layouts and confusing navigation, leading to user frustration and decreased engagement. There is a need for a systematic approach to redesigning these interfaces to improve user experience.",
    solution: "I conducted extensive user research, including interviews and usability testing, to identify pain points in the existing Blackboard interface. Based on these insights, I developed a series of prototypes that focused on simplifying navigation, improving visual hierarchy, and enhancing overall usability. The redesign incorporated clear labeling, intuitive icons, and streamlined workflows to make it easier for users to access course materials and manage their academic tasks. The project culminated in a detailed publication that outlines the design methodologies employed, challenges faced, and the positive impact of the redesign on user satisfaction and engagement.",
  
  }
];