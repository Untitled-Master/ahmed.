"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Heart,
  Code2,
  Shield,
  Users,
  GraduationCap,
  ArrowUp,
  Calendar,
} from "lucide-react"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [showScrollTop, setShowScrollTop] = useState(false)

  const quickLinks = [
    { name: "About Me", href: "#about", icon: Users },
    { name: "Projects", href: "#projects", icon: Code2 },
    { name: "Gallery", href: "#gallery", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Untitled-Master",
      username: "@Untitled-Master",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-belmehnouf-b317b5350/",
      username: "Ahmed Belmehnouf",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/axmed_bl",
      username: "@axmed_bl",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/axmed.bl/",
      username: "@axmed.bl",
      color: "hover:text-pink-400",
    },
  ]

  const achievements = [
    "ESTIN Computer Science Student",
    "NextRace CTF Competitor (13th/26)",
    "Nexus & Bytecraft Club Member",
    "BAC Excellence (17.60/20)",
  ]

  const technologies = [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "C/C++",
    "Assembly",
    "Linux",
    "Cybersecurity",
    "Cryptography",
    "OSINT",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-[#09090B] border-t border-[#FAFAFA]/10 overflow-hidden">
      {/* Mathematical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 text-2xl text-[#FAFAFA]/3 animate-pulse font-light">∫</div>
        <div className="absolute top-24 right-20 text-xl text-[#FAFAFA]/3 animate-pulse delay-1000 font-light">∇</div>
        <div className="absolute bottom-32 left-20 text-xl text-[#FAFAFA]/3 animate-pulse delay-500 font-light">∑</div>
        <div className="absolute top-32 left-1/3 text-lg text-[#FAFAFA]/3 animate-pulse delay-700 font-light">∆</div>
        <div className="absolute bottom-24 right-1/3 text-2xl text-[#FAFAFA]/3 animate-pulse delay-300 font-light">
          Ω
        </div>
        <div className="absolute top-48 right-16 text-lg text-[#FAFAFA]/3 animate-pulse delay-900 font-light">φ</div>

        {/* Geometric patterns */}
        <div
          className="absolute top-20 right-32 w-24 h-24 border border-[#FAFAFA]/3 rotate-12 animate-spin"
          style={{ animationDuration: "60s" }}
        ></div>
        <div className="absolute bottom-20 left-32 w-16 h-16 border border-[#FAFAFA]/3 rounded-full animate-pulse"></div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/4 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4 relative">
                Ahmed Belmehnouf
                <div className="absolute -top-1 -right-6 text-lg text-[#FAFAFA]/20">∞</div>
              </h3>
              <p className="text-[#FAFAFA]/80 leading-relaxed mb-6">
                Computer Science student at ESTIN, passionate about cybersecurity, software development, and
                collaborative innovation. Building secure solutions and competing in CTF challenges.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#FAFAFA]/70">
                <MapPin className="w-4 h-4 text-[#FAFAFA]/50" />
                <span className="text-sm">Bejaia, Algeria</span>
              </div>
              <div className="flex items-center space-x-3 text-[#FAFAFA]/70">
                <Mail className="w-4 h-4 text-[#FAFAFA]/50" />
                <a
                  href="mailto:ahmed.belmehnouf@estin.dz"
                  className="text-sm hover:text-[#FAFAFA] transition-colors duration-300"
                >
                  ahmed.belmehnouf@estin.dz
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#FAFAFA]/70">
                <Calendar className="w-4 h-4 text-[#FAFAFA]/50" />
                <span className="text-sm">Available for opportunities</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-[#FAFAFA]/8 hover:bg-[#FAFAFA]/15 rounded-xl border border-[#FAFAFA]/15 hover:border-[#FAFAFA]/25 transition-all duration-300 group ${social.color}`}
                  >
                    <Icon className="w-5 h-5 text-[#FAFAFA]/60 group-hover:text-current transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-[#FAFAFA] mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-colors duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-[#FAFAFA]/50 group-hover:text-[#FAFAFA]/70 transition-colors duration-300" />
                    <span className="text-sm">{link.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-[#FAFAFA] mb-6">Key Achievements</h4>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#FAFAFA]/40 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-[#FAFAFA]/70 leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="w-4 h-4 text-[#FAFAFA]/50" />
                <span className="text-sm font-medium text-[#FAFAFA]/80">Club Memberships</span>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[#FAFAFA]/70">• Nexus Cybersecurity Club</div>
                <div className="text-sm text-[#FAFAFA]/70">• Bytecraft Programming Club</div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-[#FAFAFA] mb-6">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#FAFAFA]/8 text-[#FAFAFA]/70 rounded-full text-xs font-medium border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <div className="flex items-center space-x-2 mb-3">
                <Code2 className="w-4 h-4 text-[#FAFAFA]/50" />
                <span className="text-sm font-medium text-[#FAFAFA]/80">Current Focus</span>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[#FAFAFA]/70">• Cybersecurity Tools Development</div>
                <div className="text-sm text-[#FAFAFA]/70">• CTF Competitions</div>
                <div className="text-sm text-[#FAFAFA]/70">• Academic Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FAFAFA]/10"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-[#FAFAFA]/60">
            <span className="text-sm">© {currentYear} Ahmed Belmehnouf. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm">and lots of</span>
            <Code2 className="w-4 h-4 text-[#FAFAFA]/50" />
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-[#FAFAFA]/60">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">ESTIN Student</span>
            </div>
            <div className="flex items-center space-x-2 text-[#FAFAFA]/60">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Cybersecurity Enthusiast</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-[#FAFAFA]/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-xs text-[#FAFAFA]/50 leading-relaxed">
                This portfolio showcases my journey in computer science, cybersecurity, and software development.
                <br />
                Built with React, Next.js, and Tailwind CSS. Designed with mathematical precision and aesthetic
                excellence.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-xs text-[#FAFAFA]/50">Last updated: {new Date().toLocaleDateString()}</div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-[#FAFAFA]/50">Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#FAFAFA]/15 hover:bg-[#FAFAFA]/25 backdrop-blur-xl rounded-full border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 transition-all duration-300 group z-50"
        >
          <ArrowUp className="w-5 h-5 text-[#FAFAFA]/70 group-hover:text-[#FAFAFA] transition-colors duration-300" />
        </button>
      )}
    </footer>
  )
}

export default Footer
