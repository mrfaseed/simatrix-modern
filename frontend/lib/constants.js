export const SITE_CONFIG = {
  name: "Simatrix Academy",
  shortName: "Simatrix",
  tagline: "Learn. Build. Prove. Get Career Ready.",
  description: "A modern technology learning and career platform where students learn high-impact skills, practice on interactive labs, build production-grade projects, and build verifiable proof of their abilities.",
  url: "https://simatrixacademy.com",
  phone: "+91 89033 90051 | +91 93637 93954",
  email: "info@simatrixacademy.com",
  address: "1/2A, 1st Floor, AA Road, Near Head Post Office, Virudhunagar – 626001",
  location: "1/2A, 1st Floor, AA Road, Near Head Post Office, Virudhunagar – 626001",
};

export const NAV_LINKS = [
  {
    label: "Learn",
    href: "/programs",
    badge: "Flagship",
    dropdown: [
      { label: "Career Programs", href: "/programs", desc: "Intensive 4-6 month job-ready programs" },
      { label: "Self-Paced Courses", href: "/courses", desc: "Flexible skill-building courses" },
      { label: "Free Learning", href: "/free-learning", desc: "Tutorials, cheat sheets & roadmaps" },
      { label: "Tech Roadmaps", href: "/roadmaps", desc: "Curated learning paths for modern tech" },
    ],
  },
  {
    label: "Practice",
    href: "/practice",
    badge: "Interactive",
    dropdown: [
      { label: "CodeArena", href: "/practice/code-arena", desc: "Python, Java, JS, C, C++ challenges" },
      { label: "WebLab", href: "/practice/web-lab", desc: "Frontend HTML, CSS, React sandbox" },
      { label: "SQLLab", href: "/practice/sql-lab", desc: "Real database queries & optimization" },
      { label: "DebugZone", href: "/practice/debug-zone", desc: "Fix broken code under pressure" },
      { label: "QuizZone & Assessments", href: "/practice/quiz-zone", desc: "MCQs and skill assessments" },
    ],
  },
  {
    label: "Build",
    href: "/build",
    dropdown: [
      { label: "Project Challenges", href: "/build/challenges", desc: "Guided real-world projects" },
      { label: "Capstone Projects", href: "/build/capstones", desc: "Industry-grade portfolio cornerstones" },
      { label: "Submit Project", href: "/build/submit", desc: "GitHub repo review & mentor sign-off" },
      { label: "Student Showcase", href: "/build/showcase", desc: "Proof-of-work project gallery" },
    ],
  },
  {
    label: "Career",
    href: "/career",
    dropdown: [
      { label: "Placement Prep", href: "/career", desc: "Full-cycle career launchpad" },
      { label: "Resume Builder", href: "/career/resume-builder", desc: "ATS-optimized tech resume builder" },
      { label: "Portfolio Builder", href: "/career/portfolio-builder", desc: "Auto-generate your proof of work" },
      { label: "Interview Questions", href: "/career/interview-prep", desc: "Tech, HR & system design prep" },
      { label: "Mock Interviews", href: "/career/mock-interviews", desc: "Simulated peer & mentor interviews" },
      { label: "Partner Jobs", href: "/career/jobs", desc: "Curated openings from hiring partners" },
    ],
  },
  {
    label: "Workshops",
    href: "/events",
    badge: "Free",
  },
  {
    label: "Verify",
    href: "/verify",
  },
];

export const FOOTER_LINKS = {
  programs: [
    { label: "Full Stack Development", href: "/programs/full-stack-development" },
    { label: "Data Analytics Masterclass", href: "/programs/data-analytics" },
    { label: "Data Science & AI", href: "/programs/data-science-ai" },
    { label: "All Career Programs", href: "/programs" },
    { label: "Free Learning Resources", href: "/free-learning" },
  ],
  practice: [
    { label: "CodeArena", href: "/practice/code-arena" },
    { label: "WebLab", href: "/practice/web-lab" },
    { label: "SQLLab", href: "/practice/sql-lab" },
    { label: "DebugZone", href: "/practice/debug-zone" },
    { label: "Weekly Leaderboard", href: "/community/leaderboard" },
  ],
  build: [
    { label: "Project Challenges", href: "/build/challenges" },
    { label: "Capstone Projects", href: "/build/capstones" },
    { label: "Student Portfolios", href: "/build/showcase" },
    { label: "Submit Project", href: "/build/submit" },
  ],
  platform: [
    { label: "About Simatrix", href: "/about" },
    { label: "Free Learning Hub", href: "/free-learning" },
    { label: "Verify Certificate", href: "/verify" },
    { label: "Community & Events", href: "/events" },
    { label: "Contact Us", href: "/contact" },
  ],
};
