import ProjectCard from "./Card";
import ESTINSRC from "../../assets/estinsrc.png"
import ORIGO from "../../assets/ORIGO.png"
import ELEARN from "../../assets/estinelearn.png"
import API from "../../assets/api.png"
import NEXO from "../../assets/nexocode.png"
import GYM from "../../assets/gym.png"

const ProjectGrid = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "Estin src",
      description: "Discover and access comprehensive collections of educational resources across different domains",
      image: ESTINSRC,
      github: "https://github.com/Untitled-Master/Estin-SRC",
      liveUrl: "https://estin-src-kappa.vercel.app/",
      features: [
        "Fresh design with multiple themes"
      ],
      technologies: ["Html", "CSS", "JS"]
    },
    {
      title: "ORIGO Club Page",
      description: "A community-driven club dedicated to environmental sustainability and social impact.",
      image: ORIGO,
      github: "https://github.com/Untitled-Master/Origo",
      liveUrl: "https://origo-pearl.vercel.app/",
      features: [
        "Shadcn Showcase UI",
        "Implementing Tailwind css",
        "React.js for frontend",
      ],
      technologies: ["React.js", "Js", "Tailwind", "Shadcn UI"]
    },
    {
      title: "ESTIN ELEARN",
      description: "A new frontend prototype for the platfrom estin elearn",
      image: ELEARN,
      github: "https://github.com/Untitled-Master/Estin-Elearn-UI",
      liveUrl: "https://estin-elearn.vercel.app/",
      features: [
        "Shadcn Showcase UI",
        "Implementing Tailwind css",
        "React.js for frontend",
      ],
      technologies: ["React.js", "Js", "Tailwind", "Shadcn UI"]
    },
    {
      title: "Social Media API",
      description: "This Flask API is connected to a Firebase Realtime Database and allows creating, reading, updating, deleting, liking, and commenting on posts.",
      image: API,
      github: "https://github.com/Untitled-Master/ByteCraft-backendChallenge",
      features: [
        "CRUD Operations with Firebase Realtime Database",
        "Like and Comment Functionality",
        "RESTful API Design",
        "Python Requests for Client Interaction"
      ],
      technologies: ["Python", "Firebase ", "Flask", "RT Databse"]
    },
    {
      title: "Nexo Code",
      description: "A Python code editor",
      image: NEXO,
      github: "https://github.com/Untitled-Master/NexoCode",
      features: [
        "Multi-Tab Code Editor",
        "Syntax Highlighting",
        "Custom Keybindings",
        "Discord Rich Presence Integration – Updates Discord status when the app is running if Discord is open."
      ],
      technologies: [    "Python",
        "Tkinter (GUI Framework)",
        "pypresence (Discord Rich Presence)",
        "psutil (Process Management)"]
    },
    {
      title: "Olympia Gym",
      description: "a gym managment website.",
      image: GYM,
      github: "https://github.com/Untitled-Master/Olympia-Gym",
      liveUrl:"https://olympia-gym-pearl.vercel.app/web/home.html",
      features: [
        "CRUD Operations with Firebase Realtime Database",
        "Easy to use"
      ],
      technologies: ["Bulma", "Firebase ", "Js", "RT Databse"]
    }
  ];

  return (
    <div className="w-full bg-[#09090B]"> {/* Full-width background */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"> {/* Centered container with max-width */}
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">📁 My Projects:</h2>
        <hr className="border-zinc-800" />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProjectGrid;