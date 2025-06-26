"use client"

import { useState, useEffect } from "react"
import { Code2, Shield, Brain, Github, ExternalLink, Terminal, Archive, NotebookText, GraduationCap, Dices, Newspaper, ShoppingCart, ChartBarBig, ImageUp, Calendar } from "lucide-react"

const ProjectShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "ESTIN SRC",
      description: "Shaping the future of technology through excellence in education, innovation, and research in the digital sciences. Join Algeria's premier institution for computer science and digital technology.",
      category: "cybersecurity",
      tech: ["React", "Shadcn UI", "Tailwind", "Python", "Firebase"],
      status: "Completed",
      github: "https://github.com/Untitled-Master/Estin-SRC",
      demo: "https://estinsrc.vercel.app/",
      image: "https://i.postimg.cc/rFnsTbfD/image.png",
      details: "Developed ESTIN. Implements EVERY COOL THING IN REACT",
      icon: Archive ,
    },
    {
      id: 2,
      title: "axmedBlog",
      description:
        "Find y̶o̶u̶r̶ ahmed's inspiration and share y̶o̶u̶r̶ his ideas",
      category: "Blogging",
      tech:  ["React", "Shadcn UI", "Tailwind", "Firebase"],
      status: "Active",
      github: "#",
      demo: "https://axmedblog.vercel.app/",
      image: "https://i.postimg.cc/90k68GBQ/image.png",
      details: "I felt bored so I made a blog, it is not finished yet but you can read some of my articles.",
      icon: Newspaper,
    },
    {
        id: 3,
        title: "Online Shop",
        description: "Modern online shop platform with a clean and responsive user interface.",
        category: "web",
        tech: ["Vite", "React"],
        status: "Active",
        github: "#",
        demo: "https://ecomercestore-fu11.vercel.app",
        image: "https://i.postimg.cc/T35D4fTd/image.png",
        details: "A robust e-commerce application built with Vite and React for seamless shopping experiences.",
        icon: ShoppingCart,
      },
      {
        id: 4,
        title: "Online Shop Manager",
        description: "Admin and manager portal for an online shop with statistics, product management, and user controls.",
        category: "web",
        tech: ["Vite", "React"],
        status: "Active",
        github: "#",
        demo: "https://ecomercestore-fu11.vercel.app/admin",
        image: "https://i.postimg.cc/ydy9yjs0/image.png",
        details: "Management platform for online shop owners, providing analytics and controls over products and sales.",
        icon: ChartBarBig,
      },
      {
        id: 5,
        title: "NEXZERO.FTC",
        description: "NexZero is a Capture the flag challenge organized by the NEXUS Club.",
        category: "other",
        tech: ["NEXZERO.FTC"],
        status: "Active",
        github: "#",
        demo: "https://nx1-sigma.vercel.app/",
        image: "https://i.postimg.cc/yxQz9MGt/image.png",
        details: "Developed for the NEXZERO FTC website, addressing specific needs and promoting excellence.",
        icon: Shield,
      },
      {
        id: 6,
        title: "xLoad",
        description: "Platform for uploading images quickly and securely, providing a seamless user experience.",
        category: "other",
        tech: ["xLoad [DEMO]"],
        status: "Active",
        github: "#",
        demo: "https://xloaddemo.vercel.app/",
        image: "https://i.postimg.cc/XqvRV2v8/image.png",
        details: "xLoad is an images sharing and uploading service developed for quick and secure transfers.",
        icon: ImageUp,
      },
      {
        id: 7,
        title: "Ramdany",
        description: "Modern website developed with Vite + React, focusing on sleek design and user experience.",
        category: "web",
        tech: ["Vite", "React"],
        status: "Active",
        github: "https://github.com/Untitled-Master/ramdany",
        demo: "https://ramdany.vercel.app/",
        image: "https://i.postimg.cc/kGkfkwRD/image.png",
        details: "Ramdany showcases a sleek and responsive design for modern website needs, powered by Vite and React.",
        icon: Calendar,
      },
      {
        id: 8,
        title: "Mynitch",
        description: "Personalized platform developed under the Mynitch initiative for seamless user experience.",
        category: "other",
        tech: ["Mynitch"],
        status: "Active",
        github: "https://github.com/Untitled-Master/mynitch",
        demo: "https://mynitch.vercel.app/",
        image: "https://i.postimg.cc/GmRZth9t/image.png",
        details: "Mynitch provides a tailored experience for its users, focusing on seamless interactions and modern design.",
        icon: NotebookText,
      },
      {
        id: 9,
        title: "Estin Talents",
        description: "Remake of the platform ESTIN TALENTS.",
        category: "web",
        tech: ["Vite", "React"],
        status: "Active",
        github: "https://github.com/Untitled-Master/ESTIN-Talents",
        demo: "https://estin-talents-delta.vercel.app/",
        image: "https://i.postimg.cc/cJ9jFRht/image.png",
        details: "Developed with Vite and React for students at ESTIN.",
        icon: GraduationCap,
      },
      {
        id: 10,
        title: "DevClash 2025",
        description: "Annual developer competition organized by Nexus, focusing on collaborative coding and innovation.",
        category: "other",
        tech: ["devClash - by Nexus"],
        status: "Active",
        github: "#",
        demo: "https://dev-clash-eight.vercel.app/",
        image: "https://i.postimg.cc/zXZQ2XC7/image.pngight=200&width=350",
        details: "The official platform for DevClash 2025, bringing together developers for challenging coding sprints and collaborative problem solving.",
        icon: Shield,
      },  
      {
        id: 11,
        title: "RVST",
        description: "A small stack I use for react development.",
        category: "cybersecurity",
        tech: ["Docker", "Kali Linux", "Metasploit"],
        status: "Active",
        github: "https://github.com/Untitled-Master/RVST-Stack",
        demo: "https://rvst-stack.vercel.app/",
        image: "https://i.postimg.cc/Hszt0pBV/image.png",
        details: "A small stack I use for react development, including Shadcn UI, Tailwind CSS and more.",
        icon: Terminal,
      },
      {
        id: 12,
        title: "Lichess client game assitant",
        description: "A Lichess client game assistant that helps you analyze your games and improve your skills.",
        category: "cybersecurity",
        tech: ["React", "Shadcn UI", "Tailwind", "Python", "Firebase"],
        status: "Active",
        github: "#",
        demo: "",
        image: "https://i.pinimg.com/736x/36/b6/8a/36b68a8bda77a30f6290b7bb98c6b3d8.jpg",
        details: "A Lichess client game assistant that helps you analyze your games and improve your skills. Implemting real-time analysis and game statistics.",
        icon: Dices,
      },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      case "Completed":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20"
      default:
        return "text-[#FAFAFA]/60 bg-[#FAFAFA]/10 border-[#FAFAFA]/20"
    }
  }

  const ProjectCard = ({ project, index }) => {
    const Icon = project.icon

    return (
      <div
        className="group relative bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl border border-[#FAFAFA]/15 hover:border-[#FAFAFA]/30 hover:bg-[#FAFAFA]/12 transition-all duration-700 hover:scale-105 overflow-hidden"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Project image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-[#09090B]/20 to-transparent"></div>

          {/* Status badge on image */}
          <div className="absolute top-4 right-4">
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-xl ${getStatusColor(project.status)}`}
            >
              {project.status}
            </div>
          </div>

          {/* Icon overlay */}
          <div className="absolute bottom-4 left-4">
            <div className="p-3 bg-[#FAFAFA]/20 backdrop-blur-xl rounded-2xl border border-[#FAFAFA]/30">
              <Icon className="w-6 h-6 text-[#FAFAFA]" />
            </div>
          </div>
        </div>

        {/* Project content */}
        <div className="p-8">
          {/* Project header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#FAFAFA] group-hover:text-[#FAFAFA] transition-colors duration-300 mb-2">
              {project.title}
            </h3>
          </div>

          {/* Project description */}
          <p className="text-[#FAFAFA]/80 leading-relaxed mb-4 group-hover:text-[#FAFAFA]/90 transition-colors duration-300">
            {project.description}
          </p>

          {/* Project details */}
          <p className="text-sm text-[#FAFAFA]/60 mb-6 leading-relaxed">{project.details}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-[#FAFAFA]/10 text-[#FAFAFA]/70 rounded-full text-sm font-medium border border-[#FAFAFA]/15 group-hover:bg-[#FAFAFA]/15 group-hover:border-[#FAFAFA]/25 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-3">
            <a
              href={project.github}
              className="p-2 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-xl border border-[#FAFAFA]/15 hover:border-[#FAFAFA]/30 transition-all duration-300 group/link"
            >
              <Github className="w-5 h-5 text-[#FAFAFA]/60 group-hover/link:text-[#FAFAFA] transition-colors duration-300" />
            </a>
            <a
              href={project.demo}
              className="p-2 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/20 rounded-xl border border-[#FAFAFA]/15 hover:border-[#FAFAFA]/30 transition-all duration-300 group/link"
            >
              <ExternalLink className="w-5 h-5 text-[#FAFAFA]/60 group-hover/link:text-[#FAFAFA] transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Hover overlay */}
        {hoveredProject === project.id && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA]/5 via-transparent to-[#FAFAFA]/10 rounded-3xl pointer-events-none"></div>
        )}
      </div>
    )
  }

  return (
    <section className="relative min-h-screen py-20 px-6 lg:px-8 bg-[#09090B] overflow-hidden">
      {/* Mathematical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-12 text-3xl text-[#FAFAFA]/4 animate-pulse font-light">∫</div>
        <div className="absolute top-48 right-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-1000 font-light">∇</div>
        <div className="absolute bottom-32 left-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-500 font-light">∑</div>
        <div className="absolute top-72 left-1/3 text-xl text-[#FAFAFA]/4 animate-pulse delay-700 font-light">∆</div>
        <div className="absolute bottom-48 right-1/3 text-3xl text-[#FAFAFA]/4 animate-pulse delay-300 font-light">
          Ω
        </div>
        <div className="absolute top-96 right-16 text-xl text-[#FAFAFA]/4 animate-pulse delay-900 font-light">φ</div>

        {/* Geometric patterns */}
        <div
          className="absolute top-60 right-32 w-40 h-40 border border-[#FAFAFA]/4 rotate-12 animate-spin"
          style={{ animationDuration: "50s" }}
        ></div>
        <div className="absolute bottom-60 left-32 w-28 h-28 border border-[#FAFAFA]/4 rounded-full animate-pulse"></div>
        <div
          className="absolute top-80 left-1/4 w-32 h-32 border border-[#FAFAFA]/4 rotate-45 animate-spin"
          style={{ animationDuration: "70s", animationDirection: "reverse" }}
        ></div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA]/6 via-transparent to-[#FAFAFA]/4"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#FAFAFA]/3 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar */}
          <div
            className={`lg:col-span-4 xl:col-span-3 transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="sticky top-8 space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-full border border-[#FAFAFA]/15 mb-8">
                  <Code2 className="w-5 h-5 text-[#FAFAFA]/70" />
                  <span className="text-sm font-medium text-[#FAFAFA]/70">Project Showcase</span>
                </div>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FAFAFA] mb-6 tracking-tight">
                  Built with
                  <span className="block text-[#FAFAFA]/60 relative">
                    Purpose
                    <div className="absolute -top-2 -right-4 text-2xl text-[#FAFAFA]/20">∞</div>
                  </span>
                </h2>

                <p className="text-lg text-[#FAFAFA]/80 leading-relaxed font-light mb-8">
                  A collection of projects spanning cybersecurity tools, academic implementations, and collaborative
                  development initiatives from my journey at ESTIN and club experiences.
                </p>
              </div>

              {/* Stats summary */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Project Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Total Projects</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">{projects.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Security Tools</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">
                      {projects.filter((p) => p.category === "cybersecurity").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Active Projects</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">
                      {projects.filter((p) => p.status === "Active").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Academic Work</span>
                    <span className="text-xl font-bold text-[#FAFAFA]">
                      {projects.filter((p) => p.category === "academic").length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Categories overview */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Focus Areas</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Cybersecurity & CTF Tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Brain className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Academic Implementations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Web Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Systems Programming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects grid */}
          <div
            className={`lg:col-span-8 xl:col-span-9 transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
