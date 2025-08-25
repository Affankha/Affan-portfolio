// lib/data.ts
export const personal = {
  name: "Affan Khan",
  title: "Full Stack Developer",
  location: "Jalna, Maharashtra, India",
  email: "khanaffan34163@gmail.com",
  phone: "+91-9529375820",
  github: "https://github.com/Affankha",
  linkedin: "https://www.linkedin.com/in/affan-khan-9098b4252/",
  resumeUrl: "/Affan-Khan-Resume.pdf"
};

export const summary = `Full Stack Developer experienced with MERN & Next.js.
Built production-grade web apps during internship at Moksha Solutions, handling frontend (React, Tailwind)
and backend (Node.js, MongoDB), plus deployments and animations.`;

export const experience = [
  {
    company: "Moksha Solutions",
    role: "Full Stack Developer Intern",
    date: "Mar 2025 — Aug 2025",
    points: [
      "Developed multiple websites for a college, travel company, and photographer.",
      "Transformed an offline travel agency into an online car booking website.",
      "Built a portal for doctor job postings and student applications.",
      "Worked across frontend (React, Tailwind) and backend (Node.js, MongoDB)."
    ]
  }
];

export const projects = [
  {
    name: "FDS Limousine",
    stack: ["Next.js", "Resend Email", "MongoDB", "Framer Motion"],
    description: "Luxury car booking website for a US client (Chicago).",
    live: "https://fdslimousine.com/"
  },
  {
    name: "Urban Express",
    stack: ["React", "JavaScript", "Tailwind", "REST API", "SQL"],
    description: "Luxury bus booking web app for corporate, schools, and trips (Dubai).",
    live: "https://urbanexpress.ae/"
  },
  {
    name: "Sai Photography",
    stack: ["GSAP", "Next.js", "Postgres", "MERN"],
    description: "Photography booking platform for weddings and special events.",
    live: "https://sai-photo-graphy.vercel.app/"
  }
];

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "MongoDB", "SQL", "REST API", "Tailwind CSS", "Bootstrap", "Git", "GitHub",
  "Linux", "MySQL", "Figma", "GSAP"
];

export const education = [
  {
    school: "Marathwada Institute of Technology, Aurangabad (University of Lonere)",
    degree: "B.Tech in Computer Science",
    date: "2021 — 2025",
    meta: "CGPA 7.0/10"
  },
  {
    school: "Ankushrao Tope College, Jalna",
    degree: "State Board (Class XII)",
    date: "2020 — 2021",
    meta: "Aggregate 83.5%"
  },
  {
    school: "Nutan Vidyalaya School",
    degree: "State Board (Class X)",
    date: "2018 — 2019",
    meta: "Aggregate 69.9%"
  }
];
