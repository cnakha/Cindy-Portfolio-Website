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
  status?: string;
  link?: string;
  challenges: string;
  outcome: string;
  imageUrl: string;
  imageUrl2?: string;
  vid?: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  subProblem?: string;
  keyProblems?: string[];
  keyProblemDescriptions?: string[];
  solution: string;
  milestones?: string[];
}

export const projects: Project[] = [
{
  id: "worldnotes",
  title: "WorldNotes: Global Canvas for Creative Expression",
  timeline: "June 2025 — Present",
  description: "Blurring the line between social platform and digital graffiti, explore the world through 3D notes and doodles left behind by others on a street map view.",
  category: "Fullstack Web Development and UI/UX Design for a Creative Social Media App",
  fullDescription:
    "WorldNotes is a spatial web experiment blending maps, art, and 3D spaces. Users create notes by sharing thoughts and doodles, then post and anchor them to a globally shared street view map. Designed for casual web strolling, this web app fuels the creative spirit and builds a global community centering authentic creative expression.",
  role: "Project Manager, Lead Fullstack Developer and UI/UX Designer. I built this app end-to-end from ideation to launch",
  skills: ["UI/UX Design", "Fullstack Development", "Web App Development", "Webflow Development", "Wireframing", "SEO"],
  tools: ["React", "Next.js", "TypeScript", "Three.js", "NoSQL"],
  challenges: "The main challenge was implementing real-time collaboration while maintaining performance with hundreds of concurrent users. I solved this by implementing efficient data structures and optimized WebSocket connections.",
  outcome: "This project is currently in active development with plans to launch a beta version in late 2026.",
  imageUrl: "worldnotes/thumbnail.png",
  imageUrl2: "worldnotes/welcomeScreen.png",
  problem: "Existing social media platforms are losing their genuity and overall appeal",
  subProblem: "After interviewing a pool of social media creators and everyday users, many say these are the reasons for the rise of disinterest in social media:",
  solution: "I created WorldNotes to embrace the values and practice of digital graffiti: self-expression, pictography, and creativity. Unique features like 3D note placement, custom drawing tools, and Street View mapping are integrated to create a unique craft-based social media platform.",
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
    "Most platforms use filters and optimized algorithms to maximize user engagement, this leads to tiring social media addictions and restricted natural content discovery.",
    "Social platforms are beginning to share derivative features and blend into each other. People want new and innovative ways to connect with people online.",
  ],
  status: "WorldNotes is currently under development",
  },

  {
    id: "biomed",
    title: "Sensing Through Life: A Collection of Wearable Biomedical Devices and Apps",
    description: "Five wearable IoT devices and UI projects from my time at the Wearables and Nearables Technology Laboratory at the University of Illinois Chicago",
    category: "Fullstack Development, Hardware Assembly, and UI and User Experience Design for Wearable Health Monitoring Devices",
    fullDescription: "Projects from working in the Wearables and Nearables Technology Laboratory at the University of Illinois Chicago. I collaborated in an interdisciplinary group of biomedical engineering and computer science students, gaining hands-on experience assembling and designing various wearable devices and UIs. I acquisitioned, processed, and analyzed a diverse set of sensor data, created IoT systems, and worked with various Arduino sensors. Each project was developed in under two weeks and presented through a series of live demos and critques.",
    tools: ["React", "Node.js", "Processing", "Python", "C#", "Arduino", "Figma", "Illustrator", "Photoshop"],
    challenges: "Creating an intuitive interface that could handle complex project hierarchies while remaining accessible to users of all technical levels.",
    outcome: "Successfully developed 5 different wearable biomedical devices that monitor various health metrics, each successfully tested and validated in real-world scenarios.",
    imageUrl: "biomed_devices/thumbnail.png",
    imageUrl2: "biomed_devices/thumbnail.png",
    githubUrl: "https://github.com/cnakha/Wearable_Biomedical_Devices",
    timeline: "Jan 2025 — May 2025",
    role: "Lead Frontend Developer and UI/UX Designer, Fullstack Developer and Hardware Engineer alongside Kegan Jones, Rohan Kakarlapudi, and Sufyan Siddiqui",
    skills: ["UI/UX Design", "Fullstack Development", "Entrepreneurship", "Internet of Things", "Hardware Engineering", "User Testing", "Websockets"],
    problem: "Wearable technology has the potential to revolutionize personal health tracking, yet many devices fail due to not meeting consumer needs.",
    subProblem: "After researching users and wearable assistive health tech, listed are key problems we identified in the wearable health tech space:",
    solution: "My team developed five wearable bluetooth devices that monitor biometrics such as heart rate, oxygen levels, stress, and activity patterns. The devices feature ergonomic designs, wireless communication, and intuitive UIs that provide real-time data visualization and alerts, helping users track their personal health and receive timely notifications on health anomalies.",
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
    id: "forecaster",
    title: "Chicago Traffic Commute Time Forecaster",
    description: "Training regression models on historic Chicago traffic data, integrating UI with FastAPI and RESTAPI, website hosting exploration",
    category: "Fullstack Development, Machine Learning, Linear Regression, and UI and User Experience Design",
    fullDescription: "An interactive web application that predicts commute times in Chicago using historic congestion patterns, route distance, and contextual travel conditions. The tool helps commuters visualize how traffic impacts travel time and compares a simple baseline estimate against a machine-learned prediction.",
    tools: ["React", "Javascript", "Tailwind", "FastAPI", "Python", "REST API", "Figma", "Scikit-learn", "Linear Regression", "Random Forest", "XGBoost", "Pandas", "NumPy"],
    challenges: "Creating an intuitive interface that could handle complex project hierarchies while remaining accessible to users of all technical levels.",
    outcome: "",
    imageUrl: "forecaster/thumbnail.png",
    imageUrl2: "forecaster/banner.png",
    githubUrl: "https://github.com/cnakha/cs412-machine-learning-project",
    timeline: "Nov 2025 — Dec 2025",
    role: "Lead Frontend Developer and UI/UX Designer, Fullstack Developer and ML Engineer alongside Elizabeth Ng",
    skills: ["UI/UX Design", "Fullstack Development", "Machine Learning", "Data Cleaning", "Model Evaluation"],
    problem: "Chicago is ranked as one of the most congested cities in the U.S. where drivers lose, on average, 102 hours per year in traffic and an estimated $1826 annually in lost time/productivity.",
    link: "https://cs412-machine-learning-project.vercel.app/",
    solution: "The objective of this project is to create and compare regression models to predict commute times based on historical Chicago traffic data. The result of this project is a dashboard that includes trained regression models, visuals of model evaluations in the form of plots, and maps that reveal congestion levels and predicted delay intensities.",
    features: [
      "Linear Regression Model Interaction",
      "Commute Time Forecaster Dashboard",
      "Google Maps API Integration",
      "Congestion Heatmap"
    ],
  },
  {
    id: "YCGH",
    title: "You Can Grow Here: A Therapeutic VR Journey for Anxiety Management",
    description: "Published research on theatrical storytelling, typographic design, and adapting wellness techniques to guide users in anxiety relief in VR (Presented at SIGGRAPH 2025).",
    category: "VR Application and Research Paper on VR Applications Centering Health and Well-Being Presented at SIGGRAPH 2025 Convention",
    fullDescription: "You Can Grow Here is an immersive VR experience developed for and exhibited at the CAVE2™ environment in the Electronic Visualization Laboratory at the University of Illinois Chicago, aligning with the United Nation's Sustainable Development Goal of Good Health and Well-Being. In response to the mental health challenges intensified by the COVID-19 pandemic, the project explores how interactive storytelling, ambient sound, and 3D typography can support emotional reflection, explore modes of group therapy, and teach anxiety coping strategies. Built in Unity with custom assets from Blender and Maya, the experience differs from most clinical VR programs, allowing users to independently explore emotions, manage anxiety, and practice evidence-based calming techniques within a safe, narrative-driven space that builds emotional resilience.",
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
    imageUrl: "YCGH/thumbnail.png",
    imageUrl2: "YCGH/interaction2.jpeg",
    vid: "YCGH/YCGH_Concept_Vid.mp4",
    timeline: "Jan 2025 — May 2025",
    role: "Equal contributing VR Developer and UI/UX Designer along side 3 other interdisciplinary students from computer science and design backgrounds: Hope Jo, Gaeun Lee, Khin Yuupar Myat",
    skills: ["Virtual Reality Development", "Human-Computer Interaction", "Prototyping", "3D Modeling", "User Testing", "Field Research", "Scripting"],
    tools: ["C#", "Unity", "Blender", "Maya", "Figma"],
    problem: "Anxiety continues to be one of the most prevalent and growing mental health challenges, with 43% of adults in 2024 reporting increased levels of anxiety compared to the previous year.",
    subProblem: "While traditional therapeutic approaches remain vital, there is a growing need for accessible, engaging tools that promote emotional awareness and coping strategies. Key challenges in mental health support include:",
    solution: "You Can Grow Here (YCGH) was developed to be a narrative-driven virtual reality (VR) experience that leverages interaction, storytelling, and design to foster emotional reflection and support mental well-being.",  
    keyProblems:[
      "Inaccessible Emotional Support",
      "Lack of Engaging and Emotionally Reflective Tools",
      "Difficulty Building Emotional Awareness"
    ],
    keyProblemDescriptions:[
      "Inconsistent access to therapy due to financial, geographic, or social barriers, impersonal tools, and strictly clinical tools limit access to emotional support.",
      "There's a need for interactive, sensory-rich experiences that help users sustain engagement and encourage deep emotional reflection.",
      "Internalizing and applying coping mechanisms in real-life situations can be hard without spaces for safe exploration and guided practice."
      ],
  },
  {
    id: "foliofolds",
    title: "FolioFolds: 3D Papercraft Made Easy",
    description: "Assemble and share interactive 3D mockups of books, cards, zines, origamis, and fliers with support of complex folds, bindings, cutouts, and AR viewing",
    category: "Fullstack Development of 3D Model Editors and Web Design",
    fullDescription: "From birthday cards to origami, FolioFolds is a web application for designing, assembling, and sharing interactive 3D mockups of unique printed forms. The platform supports complex folds, bindings, cutouts, and offers AR viewing capabilities.",
    features: [
      "Supports PDF, PNG, and JPEG imports to create 3D models",
      "Drag-and-drop interface",
      "Real-time 3D rendering powered by WebGL",
      "AR viewing capabilities for mobile devices",
      "Embbed models on external websites",
      "User accounts for saving and managing projects",
      "Allows folds, cutouts, textured paper, and bindings",
      "Animate page flips or manually flip through publications",
    ],
    challenges: "Creating a user-friendly interface that could handle the complexity of 3D modeling while ensuring smooth performance across devices.",
    outcome: "This project is currently in active development with plans to launch a beta version in late 2026.",
    imageUrl: "foliofolds/thumbnail.png",
    imageUrl2: "foliofolds/thumbnail.png",
    timeline: "June 2025 — Present",
    role: "Project Manager, Fullstack Developer, and UI/UX Designer",
    skills: ["UI/UX Design", "Fullstack Development", "Web Development", "Prototyping", "User Testing"],
    tools: ["Figma", "React", "Next.js", "Typescript", "Three.js", "WebGL"],
    problem: "Designers want a tool to help display interactable printworks in 3D that's both intuitive and accessible to expert designers and casual users.",
    subProblem: "There is a need for a stream-lined way to construct complex 3D versions of printworks that provides accessibility. Here are key problems we identified:",
    solution: "Wanting a better way to showcase my design projects online, I made FolioFolds, a web application that allows users to create and share interactive 3D mockups of printworks. The platform makes creating paper folds, cutouts, and bindings easier by provided tailored tools for paper engineering. Users can embedd finished piece into a website or view it in AR using their mobile devices. Publications can be flipped through manually or viewed through animated video, fostering a vibrant ecosystem of print design enthusiasts.",
    keyProblems:[
      "Lack of Intuitive 3D Visualization for Printed Materials",
      "Physical Prototyping Is Time-Consuming and Expensive",
      "Print Works Lose Impact When Shown Digitally",
    ],
    keyProblemDescriptions:[
      "Professional 3D and CAD tools struggle to capture the tactile complexity of print work and have too much technical depth for casual users.",
      "Physically prototyping folds, bindings, cutouts, and page structures often requires multiple physical mockups",
      "Traditional digital documentations (flat scans, photos, or videos) struggle to capture the dimensionality, tactility, and interactive discovery of physical publications.",
    ],
    status: "FolioFolds is finalizing its design and beginning development... Stay tuned for updates!",
    },
    {
    id: "iceberg",
    title: "The UI Motion Graphics Iceberg",
    description: "Experiments and explorative look into current practices in advanced UI animations and interactions",
    category: "UI/UX Design and Frontend Development",
    fullDescription: "A bento style showcase of interactable UI elements with a focus on motion graphics and user experience. I started this project out of pure curiosity as to how super stylized animated buttons and visuals were created in the handful of medias I've seen. What are the best practices? What tools should I use? How can motion graphics be integrated ",
    challenges: "",
    outcome: "",
    imageUrl: "foliofolds/thumbnail.png",
    timeline: "December 2025 — Present",
    role: "Frontend Developer, and UI/UX Designer",
    skills: ["UI/UX Design", "Frontend Development"],
    tools: ["Figma", "React", "Photoshop", "Illustrator", "After Effect"],
    problem: "",
    subProblem: "",
    solution: "",
    },
  // {
  //   id: "clarity",
  //   title: "Clarity, Learning Management Systems, Chatbots, and Integrating AI",
  //   description: "Methodologies for designing clear and intuitive user interfaces and general exploration of AI features and assimilation into existing products",
  //   category: "Design Research, Methodology Development, and UI and User Experience Design",
  //   fullDescription: "Designing For Clarity is a comprehensive redesign of Blackboard's user interface, focusing on enhancing user-flow and accessibility for a diverse user base. The project involved extensive user research, comparative market research on learning management systems, systems prototyping, and iterative user tests to develop a more intuitive and engaging experience. The redesign emphasizes clear navigation, simplified workflows, and improved visual hierarchy, making it easier for users to access course materials, communicate with peers, and manage their academic tasks. The project culminated in a detailed publication outlining the design methodologies employed, challenges faced, and the impact of the redesign on user satisfaction and engagement.",
  //   features: [
  //     "User-Centered Design Approach",
  //     "Comprehensive User Research, Interviewing, and Analysis",
  //     "Interactive Prototyping and User Testing",
  //   ],
  //   challenges: "Balancing the needs of a diverse user base while maintaining a cohesive and intuitive design language that fits the branding and existing design language of the host product.",
  //   outcome: "The redesign received positive feedback from users during testing, with a 30% increase in task completion rates and a 25% reduction in user errors compared to the original interface. The publication has been well-received, contributing valuable insights into UI/UX design methodologies.",
  //   imageUrl: "/clarity/thumbnail.png",
  //   timeline: "Jan 2023 - May 2024",
  //   role: "Design Reasearcher and User Interface and User Experience Designer",
  //   skills: ["UI/UX Design", "Web Design", "Prototyping", "Wireframing", "User Testing", "User Research", "Interviewing"],
  //   tools: ["Adobe CC", "Figma", "Illustrator", "Photoshop"],
  //   problem: "How can we redesign complex user interfaces to enhance clarity and usability for a diverse user base?",
  //   subProblem: "Many existing user interfaces, particularly in educational platforms like Blackboard, suffer from cluttered out of date layouts and confusing navigation, leading to user frustration and decreased engagement. There is a need for a systematic approach to redesigning these interfaces to improve user experience.",
  //   solution: "I conducted extensive user research, including interviews and usability testing, to identify pain points in the existing Blackboard interface. Based on these insights, I developed a series of prototypes that focused on simplifying navigation, improving visual hierarchy, and enhancing overall usability. The redesign incorporated clear labeling, intuitive icons, and streamlined workflows to make it easier for users to access course materials and manage their academic tasks. The project culminated in a detailed publication that outlines the design methodologies employed, challenges faced, and the positive impact of the redesign on user satisfaction and engagement.",
  
  // }
];