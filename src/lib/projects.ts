export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce built with Next.js and Laravel",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Laravel", "React", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com/sicsee/ecommerce",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time task management with WebSockets",
    image: "/projects/tasks.jpg",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com/sicsee/tasks",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    link: "https://nicolasgodinho.com",
    github: "https://github.com/sicsee/portfolio",
    featured: false,
  },
];
