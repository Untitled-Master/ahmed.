import React from 'react';
import { GraduationCap, Award, School, Github, Linkedin, Mail, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BioSection = () => {
  const education = [
    {
      period: "Sep. 2024 – Present",
      institution: "Higher School of Computer Science and Digital Technologies - ESTIN",
      type: "Higher Education",
      icon: School,
      details: "Currently pursuing studies in Computer Science",
      location: "Bejaia, Algeria",
      courses: [
        "Algorithms & Data Structures",
        "Operating Systems (Linux)",
        "Computer Architectures",
        "Assembly Programming",
        "Analysis & Algebra"
      ]
    },
    {
      period: "Sep. 2023-2024",
      institution: "BAC EXAM",
      type: "High School Diploma",
      icon: GraduationCap,
      achievements: [
        "Overall Grade: 17.60/20 in Mathematics field",
        "Mathematics Score: 19.5/20"
      ],
      location: "Algeria"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/ahmeed1743",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <>
    <div className="bg-[#09090B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio and Image Section */}
          <Card className="lg:col-span-1 bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-6 group">
                <img
                  src="https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4"
                  alt="Profile Picture"
                  className="rounded-full object-cover border-4 border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-zinc-950 p-2 rounded-full border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-300">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-zinc-100 mb-2">Ahmed Belmehnouf</h1>
              <p className="text-zinc-400 mb-4 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Bejaia, Algeria
              </p>
              <p className="text-zinc-300 text-sm mb-6">
                Passionate about technology and software development. Always eager to learn
                and tackle new challenges in the world of computer science.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <Button 
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                Contact Me
              </Button>
            </CardContent>
          </Card>

          {/* Education Timeline Section */}
          <Card className="lg:col-span-2 bg-zinc-950 border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Educational Journey
              </h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 pb-8 border-l border-zinc-800 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-6 h-6 -translate-x-3 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center">
                      <edu.icon className="w-3 h-3 text-zinc-400" />
                    </div>
                    
                    <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:translate-x-1">
                      <span className="text-sm font-medium text-zinc-400">
                        {edu.period}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-100 mt-1">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-zinc-400 text-sm">{edu.type}</p>
                        {edu.location && (
                          <>
                            <span className="text-zinc-600">•</span>
                            <p className="text-zinc-400 text-sm flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {edu.location}
                            </p>
                          </>
                        )}
                      </div>
                      
                      {edu.achievements && (
                        <ul className="mt-3 space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-zinc-300 text-sm flex items-center gap-2">
                              <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {edu.details && (
                        <p className="text-zinc-300 text-sm mt-2">{edu.details}</p>
                      )}

                      {edu.courses && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-zinc-200 flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4" />
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600 transition-colors duration-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default BioSection;