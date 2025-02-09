import ProjectCard from "./Card";

const ProjectGrid = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "/api/placeholder/400/200",
      github: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com",
      features: [
        "User authentication and authorization",
        "Real-time inventory tracking",
        "Payment integration with Stripe",
        "Order management system"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool for teams",
      image: "/api/placeholder/400/200",
      github: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.com",
      features: [
        "Real-time updates with WebSocket",
        "Team collaboration features",
        "File attachments and sharing",
        "Progress tracking"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring with historical data analysis",
      image: "/api/placeholder/400/200",
      github: "https://github.com/yourusername/project3",
      features: [
        "Real-time weather updates",
        "Interactive weather maps",
        "7-day forecast",
        "Historical data charts"
      ],
      technologies: ["React", "D3.js", "Weather API", "Chart.js"]
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media performance tracking",
      image: "/api/placeholder/400/200",
      liveUrl: "https://project4.com",
      features: [
        "Multi-platform integration",
        "Custom reporting",
        "Engagement metrics",
        "Automated insights"
      ],
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL"]
    }
  ];

  return (
    <div className="mx-auto px-96 sm:px-6 lg:px-8 py-8 bg-[#09090B]">
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">📁 My Projects:</h2>
      <hr className="border-zinc-800" />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};


export default ProjectGrid;