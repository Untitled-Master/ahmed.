"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  MapPin,
  Calendar,
  Target,
  Shield,
  Code2,
  Trophy,
  Users,
  Brain,
  Zap,
  GraduationCap,
  Star,
  Flag,
} from "lucide-react"

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentCourse, setCurrentCourse] = useState(0)
  const [currentValue, setCurrentValue] = useState(0)
  const [activeTab, setActiveTab] = useState("journey")

  const keyCourses = [
    { name: "Algorithms & Data Structures", focus: "Problem Solving", icon: Brain },
    { name: "Operating Systems (Linux)", focus: "System Architecture", icon: Code2 },
    { name: "Computer Architectures", focus: "Hardware Understanding", icon: Zap },
    { name: "Assembly Programming", focus: "Low-Level Programming", icon: Target },
    { name: "Analysis & Algebra", focus: "Mathematical Foundation", icon: BookOpen },
  ]

  const coreValues = [
    "Always eager to learn and tackle new challenges",
    "Passionate about technology and software development",
    "Dedicated to cybersecurity and ethical hacking",
    "Committed to collaborative development and teamwork",
  ]

  const achievements = [
    {
      year: "2024",
      title: "ESTIN Computer Science Student",
      desc: "Currently pursuing advanced studies in Computer Science at Higher School of Computer Science and Digital Technologies",
      location: "Bejaia, Algeria",
    },
    {
      year: "2024",
      title: "CTF Competitor",
      desc: "Active participant in Capture The Flag competitions, achieving top 25% performance ranking",
      location: "Cybersecurity Competitions",
    },
    {
      year: "2023",
      title: "BAC Excellence",
      desc: "Graduated with 17.60/20 overall grade, 19.5/20 in Mathematics - demonstrating strong analytical skills",
      location: "Algeria",
    },
  ]
const competitions = [
  {
    name: "NextRace CTF",
    organizer: "Nexus Club",
    placement: "13th Place",
    details: "13/26 teams • 50th Percentile",
    type: "CTF",
  },
  {
    name: "Cicada Game OSINT",
    organizer: "Nexus Club",
    placement: "3/4 Challenges",
    details: "Successfully solved 3 out of 4 challenges",
    type: "OSINT Challenge",
  },
  {
    name: "HACK.INI 2025",
    organizer: "Shellmates Club",
    placement: "21st Place",
    details: "21/97 teams • ~21.6th Percentile • Played with Haitomass as team cogit0wn",
    type: "CTF",
  },
];


  const clubs = [
    {
      name: "Nexus",
      type: "Cybersecurity Club",
      role: "Development Section Member",
      focus: "Security tools and applications development, CTF organization",
      icon: Shield,
    },
    {
      name: "Bytecraft",
      type: "Programming Club",
      role: "Development Section Member",
      focus: "Software development projects and collaborative coding initiatives",
      icon: Code2,
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    const courseInterval = setInterval(() => {
      setCurrentCourse((prev) => (prev + 1) % keyCourses.length)
    }, 3000)

    const valueInterval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % coreValues.length)
    }, 4000)

    return () => {
      clearInterval(courseInterval)
      clearInterval(valueInterval)
    }
  }, [])

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`
        relative flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-500 group
        ${
          isActive
            ? "bg-[#FAFAFA]/15 border-[#FAFAFA]/40 text-[#FAFAFA] shadow-xl"
            : "bg-[#FAFAFA]/5 border-[#FAFAFA]/15 text-[#FAFAFA]/70 hover:bg-[#FAFAFA]/10 hover:border-[#FAFAFA]/25"
        }
        border backdrop-blur-xl
      `}
    >
      <Icon
        className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-[#FAFAFA]" : "text-[#FAFAFA]/60 group-hover:text-[#FAFAFA]/80"}`}
      />
      <span className="font-medium">{label}</span>
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/10 to-[#FAFAFA]/5 rounded-2xl animate-pulse"></div>
      )}
    </button>
  )

  return (
    <section className="relative min-h-screen py-20 px-6 lg:px-8 bg-[#09090B] overflow-hidden">
      {/* Mathematical background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-12 text-3xl text-[#FAFAFA]/4 animate-pulse font-light">∇</div>
        <div className="absolute top-48 right-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-1000 font-light">∂</div>
        <div className="absolute bottom-32 left-20 text-2xl text-[#FAFAFA]/4 animate-pulse delay-500 font-light">∈</div>
        <div className="absolute top-72 left-1/3 text-xl text-[#FAFAFA]/4 animate-pulse delay-700 font-light">∀</div>
        <div className="absolute bottom-48 right-1/3 text-3xl text-[#FAFAFA]/4 animate-pulse delay-300 font-light">
          ∃
        </div>
        <div className="absolute top-96 right-16 text-xl text-[#FAFAFA]/4 animate-pulse delay-900 font-light">∴</div>

        {/* Geometric patterns */}
        <div
          className="absolute top-60 right-32 w-40 h-40 border border-[#FAFAFA]/4 rotate-12 animate-spin"
          style={{ animationDuration: "40s" }}
        ></div>
        <div className="absolute bottom-60 left-32 w-28 h-28 border border-[#FAFAFA]/4 rounded-full animate-pulse"></div>
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
              {/* Profile Section */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-full border border-[#FAFAFA]/15 mb-8">
                  <MapPin className="w-5 h-5 text-[#FAFAFA]/70" />
                  <span className="text-sm font-medium text-[#FAFAFA]/70">Bejaia, Algeria</span>
                </div>

                {/* Profile Image */}
                <div className="relative mb-8 flex justify-center">
                  <div className="relative group">
                    {/* Glow effects */}
                    <div
                      className="absolute -inset-4 bg-gradient-to-r from-[#FAFAFA]/20 via-[#FAFAFA]/10 to-[#FAFAFA]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60 group-hover:opacity-80 animate-pulse"
                      style={{ animationDuration: "4s" }}
                    ></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#FAFAFA]/15 to-[#FAFAFA]/25 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-90"></div>

                    {/* Image container */}
                    <div className="relative w-48 h-48 z-10">
                      <div className="w-full h-full bg-gradient-to-br from-[#FAFAFA]/12 via-[#FAFAFA]/8 to-[#FAFAFA]/6 rounded-3xl border border-[#FAFAFA]/20 backdrop-blur-xl overflow-hidden group-hover:scale-105 transition-all duration-700 ease-out shadow-2xl">
                        <img
                          src="https://avatars.githubusercontent.com/u/128633214?v=4nimg.com/736x/12/5c/c1/125cc1bb389b7ab048f34bc2958f5239.jpg"
                          alt="Ahmed Belmehnouf"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-[#FAFAFA] mb-6 tracking-tight">
                  Ahmed
                  <span className="block text-[#FAFAFA]/60 relative">
                    Belmehnouf
                    <div className="absolute -top-2 -right-4 text-2xl text-[#FAFAFA]/20">∞</div>
                  </span>
                </h2>

                {/* Rotating core values */}
                <div className="relative h-20 overflow-hidden">
                  {coreValues.map((value, index) => (
                    <p
                      key={index}
                      className={`
                        absolute inset-0 text-sm text-[#FAFAFA]/80 leading-relaxed font-light italic
                        transition-all duration-1000 ease-in-out
                        ${
                          currentValue === index
                            ? "opacity-100 translate-y-0"
                            : index === (currentValue - 1 + coreValues.length) % coreValues.length
                              ? "opacity-0 -translate-y-8"
                              : "opacity-0 translate-y-8"
                        }
                      `}
                    >
                      "{value}"
                    </p>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Quick Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Current Studies</span>
                    <span className="text-sm font-medium text-[#FAFAFA]">ESTIN</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">BAC Grade</span>
                    <span className="text-sm font-bold text-[#FAFAFA]">17.60/20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">Math Score</span>
                    <span className="text-sm font-bold text-[#FAFAFA]">19.5/20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FAFAFA]/70">CTF Ranking</span>
                    <span className="text-sm font-medium text-[#FAFAFA]">Top 21%</span>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-6 border border-[#FAFAFA]/15">
                <h3 className="text-lg font-semibold text-[#FAFAFA] mb-6">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Computer Science Studies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Cybersecurity & CTFs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Software Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-[#FAFAFA]/60" />
                    <span className="text-[#FAFAFA]/80">Club Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`lg:col-span-8 xl:col-span-9 transition-all duration-1200 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-4 mb-12">
              <TabButton
                id="journey"
                label="Educational Journey"
                icon={GraduationCap}
                isActive={activeTab === "journey"}
                onClick={setActiveTab}
              />
              <TabButton
                id="achievements"
                label="Achievements & CTFs"
                icon={Trophy}
                isActive={activeTab === "achievements"}
                onClick={setActiveTab}
              />
              <TabButton
                id="clubs"
                label="Club Experience"
                icon={Users}
                isActive={activeTab === "clubs"}
                onClick={setActiveTab}
              />
            </div>

            {/* Content Sections */}
            <div>
              {/* Educational Journey Tab */}
              {activeTab === "journey" && (
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Timeline */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-8 flex items-center">
                      <Calendar className="w-6 h-6 mr-3 text-[#FAFAFA]/60" />
                      Academic Timeline
                    </h3>

                    <div className="space-y-6">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="relative pl-8 pb-8 border-l border-[#FAFAFA]/20 last:border-l-0">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-[#FAFAFA]/30 rounded-full border-2 border-[#09090B]"></div>
                          <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl p-6 border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-500 group">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-[#FAFAFA]/60 bg-[#FAFAFA]/10 px-3 py-1 rounded-full">
                                {achievement.year}
                              </span>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-[#FAFAFA]/40" />
                                <span className="text-xs text-[#FAFAFA]/50">{achievement.location}</span>
                              </div>
                            </div>
                            <h4 className="text-lg font-semibold text-[#FAFAFA] mb-2">{achievement.title}</h4>
                            <p className="text-[#FAFAFA]/70 leading-relaxed">{achievement.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Current Studies */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-8 flex items-center">
                      <BookOpen className="w-6 h-6 mr-3 text-[#FAFAFA]/60" />
                      Current Studies at ESTIN
                    </h3>

                    <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-8 border border-[#FAFAFA]/15 space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <GraduationCap className="w-8 h-8 text-[#FAFAFA]/60" />
                        <div>
                          <h4 className="text-xl font-semibold text-[#FAFAFA]">Computer Science</h4>
                          <p className="text-[#FAFAFA]/70">
                            Higher School of Computer Science and Digital Technologies
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h5 className="text-lg font-semibold text-[#FAFAFA] mb-4">Key Courses</h5>

                        <div className="space-y-3">
                          {keyCourses.map((course, index) => {
                            const Icon = course.icon
                            const isActive = currentCourse === index

                            return (
                              <div
                                key={index}
                                className={`
                                  flex items-center space-x-4 p-4 rounded-xl transition-all duration-500
                                  ${
                                    isActive
                                      ? "bg-[#FAFAFA]/15 border border-[#FAFAFA]/30 scale-105"
                                      : "bg-[#FAFAFA]/5 border border-[#FAFAFA]/10 hover:bg-[#FAFAFA]/10"
                                  }
                                `}
                              >
                                <Icon
                                  className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-[#FAFAFA]" : "text-[#FAFAFA]/60"}`}
                                />
                                <div className="flex-1">
                                  <h6 className="font-medium text-[#FAFAFA]">{course.name}</h6>
                                  <p className="text-sm text-[#FAFAFA]/60">{course.focus}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Academic Excellence */}
                    <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl p-6 border border-[#FAFAFA]/15">
                      <div className="flex items-center space-x-3 mb-4">
                        <Star className="w-6 h-6 text-[#FAFAFA]/60" />
                        <h4 className="text-lg font-semibold text-[#FAFAFA]">Academic Excellence</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-[#FAFAFA]/5 rounded-xl">
                          <div className="text-2xl font-bold text-[#FAFAFA]">17.60/20</div>
                          <div className="text-sm text-[#FAFAFA]/60">Overall BAC Grade</div>
                        </div>
                        <div className="text-center p-4 bg-[#FAFAFA]/5 rounded-xl">
                          <div className="text-2xl font-bold text-[#FAFAFA]">19.5/20</div>
                          <div className="text-sm text-[#FAFAFA]/60">Mathematics Score</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Achievements & CTFs Tab */}
              {activeTab === "achievements" && (
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Competition History */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-8 flex items-center">
                      <Trophy className="w-6 h-6 mr-3 text-[#FAFAFA]/60" />
                      Competition History
                    </h3>

                    <div className="space-y-6">
                      {competitions.map((comp, index) => (
                        <div
                          key={index}
                          className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl p-6 border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-500 group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-[#FAFAFA] mb-1">{comp.name}</h4>
                              <p className="text-sm text-[#FAFAFA]/60">Organized by {comp.organizer}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-[#FAFAFA] bg-[#FAFAFA]/10 px-3 py-1 rounded-full">
                                {comp.type}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xl font-bold text-[#FAFAFA]">{comp.placement}</div>
                              <div className="text-sm text-[#FAFAFA]/70">{comp.details}</div>
                            </div>
                            <Flag className="w-6 h-6 text-[#FAFAFA]/40 group-hover:text-[#FAFAFA]/60 transition-colors duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-8 flex items-center">
                      <Target className="w-6 h-6 mr-3 text-[#FAFAFA]/60" />
                      Performance Overview
                    </h3>

                    <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-8 border border-[#FAFAFA]/15 space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-6 bg-[#FAFAFA]/5 rounded-2xl">
                          <div className="text-3xl font-bold text-[#FAFAFA] mb-2">Top 21%</div>
                          <div className="text-sm text-[#FAFAFA]/60">Performance Ranking</div>
                        </div>
                        <div className="text-center p-6 bg-[#FAFAFA]/5 rounded-2xl">
                          <div className="text-3xl font-bold text-[#FAFAFA] mb-2">2</div>
                          <div className="text-sm text-[#FAFAFA]/60">CTFs Completed</div>
                        </div>
                      </div>

                      <div className="text-center p-6 bg-[#FAFAFA]/5 rounded-2xl">
                        <div className="text-3xl font-bold text-[#FAFAFA] mb-2">21/97</div>
                        <div className="text-sm text-[#FAFAFA]/60">Best Team Placement</div>
                      </div>
                    </div>

                    <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-2xl p-6 border border-[#FAFAFA]/15">
                      <h4 className="text-lg font-semibold text-[#FAFAFA] mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-3 text-[#FAFAFA]/60" />
                        Cybersecurity Focus
                      </h4>
                      <p className="text-[#FAFAFA]/80 leading-relaxed">
                        Active participant in Capture The Flag competitions, demonstrating skills in cybersecurity,
                        OSINT (Open Source Intelligence), and problem-solving under pressure. Consistently performing in
                        the top percentiles of competitive events.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Club Experience Tab */}
              {activeTab === "clubs" && (
                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {clubs.map((club, index) => {
                      const Icon = club.icon
                      return (
                        <div
                          key={index}
                          className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-8 border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:border-[#FAFAFA]/25 transition-all duration-500 group"
                        >
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-[#FAFAFA]/10 rounded-2xl group-hover:bg-[#FAFAFA]/15 transition-colors duration-300">
                              <Icon className="w-8 h-8 text-[#FAFAFA]/60 group-hover:text-[#FAFAFA] transition-colors duration-300" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-[#FAFAFA]">{club.name}</h3>
                              <p className="text-[#FAFAFA]/60">{club.type}</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-[#FAFAFA] mb-2">Role</h4>
                              <p className="text-[#FAFAFA]/70">{club.role}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-[#FAFAFA] mb-2">Focus Areas</h4>
                              <p className="text-[#FAFAFA]/70 leading-relaxed">{club.focus}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Club Impact */}
                  <div className="bg-[#FAFAFA]/8 backdrop-blur-xl rounded-3xl p-8 border border-[#FAFAFA]/15">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-6 flex items-center">
                      <Users className="w-6 h-6 mr-3 text-[#FAFAFA]/60" />
                      Collaborative Development
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-[#FAFAFA] mb-4 flex items-center">
                          <Shield className="w-5 h-5 mr-3 text-[#FAFAFA]/60" />
                          Nexus Cybersecurity
                        </h4>
                        <p className="text-[#FAFAFA]/80 leading-relaxed">
                          Contributing to the development team in a cybersecurity-focused environment. Working on
                          security tools and applications while helping organize CTF competitions and security-related
                          events for the community.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-[#FAFAFA] mb-4 flex items-center">
                          <Code2 className="w-5 h-5 mr-3 text-[#FAFAFA]/60" />
                          Bytecraft Programming
                        </h4>
                        <p className="text-[#FAFAFA]/80 leading-relaxed">
                          Active member in the development section, focusing on software development projects and
                          collaborative coding initiatives. Contributing to various programming projects and sharing
                          knowledge with fellow developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
