import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Infinity, Brain, Code2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);
  const [philosophyIndex, setPhilosophyIndex] = useState(0);

  const techStack = ['React', 'NodeJS', 'TailwindCSS', 'Javascript', 'Python', '+99'];
  
  const philosophicalQuotes = [
    "Pure mathematics is, in its way, the poetry of logical ideas.",
    "Logic is the anatomy of thought.",
    "In mathematics, the art of proposing a question must be held of higher value than solving it.",
    "The universe is written in the language of mathematics."
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through tech stack
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2000);

    // Rotate through philosophical quotes
    const philosophyInterval = setInterval(() => {
      setPhilosophyIndex((prev) => (prev + 1) % philosophicalQuotes.length);
    }, 5000);

    return () => {
      clearInterval(techInterval);
      clearInterval(philosophyInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#09090B] overflow-hidden">
      {/* Philosophical background elements - adjusted for mobile */}
      <div className="absolute inset-0">
        {/* Mathematical symbols floating - responsive positioning */}
        <div className="absolute top-16 sm:top-20 left-6 sm:left-10 text-xl sm:text-2xl text-[#FAFAFA]/5 animate-pulse font-light">∞</div>
        <div className="absolute top-24 sm:top-32 right-8 sm:right-16 text-base sm:text-lg text-[#FAFAFA]/5 animate-pulse delay-1000 font-light">∫</div>
        <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-16 text-lg sm:text-xl text-[#FAFAFA]/5 animate-pulse delay-500 font-light">∑</div>
        <div className="absolute top-48 sm:top-60 left-1/4 text-base sm:text-lg text-[#FAFAFA]/5 animate-pulse delay-700 font-light">∆</div>
        <div className="absolute bottom-48 sm:bottom-60 right-1/4 text-xl sm:text-2xl text-[#FAFAFA]/5 animate-pulse delay-300 font-light">π</div>
        <div className="absolute top-64 sm:top-80 right-6 sm:right-12 text-base sm:text-lg text-[#FAFAFA]/5 animate-pulse delay-900 font-light">Ω</div>
        
        {/* Geometric patterns - responsive sizing */}
        <div className="absolute top-32 sm:top-40 right-20 sm:right-40 w-20 sm:w-32 h-20 sm:h-32 border border-[#FAFAFA]/5 rotate-45 animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-32 sm:bottom-40 left-20 sm:left-40 w-16 sm:w-24 h-16 sm:h-24 border border-[#FAFAFA]/5 rounded-full animate-pulse"></div>
      </div>

      {/* Background gradient with philosophical depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA]/8 via-transparent to-[#FAFAFA]/3"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#FAFAFA]/2 to-transparent"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className={`space-y-6 sm:space-y-8 lg:space-y-10 transition-all duration-1200 ease-out text-center lg:text-left ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            
            {/* Philosophical Badge - mobile optimized */}
            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 py-2 sm:py-3 bg-[#FAFAFA]/8 backdrop-blur-xl rounded-full border border-[#FAFAFA]/15 hover:bg-[#FAFAFA]/12 hover:scale-105 hover:border-[#FAFAFA]/25 transition-all duration-500 group">
              <Brain className="w-3 sm:w-4 h-3 sm:h-4 text-[#FAFAFA]/70 group-hover:text-[#FAFAFA] transition-colors duration-300" />
              <span className="text-xs sm:text-sm font-medium text-[#FAFAFA]/70 group-hover:text-[#FAFAFA] transition-colors duration-300">Philosophical Approach</span>
              <Infinity className="w-3 sm:w-4 h-3 sm:h-4 text-[#FAFAFA]/40 group-hover:text-[#FAFAFA]/60 transition-all duration-300 group-hover:rotate-180" />
            </div>

            {/* Main Heading with philosophical elements - responsive text sizing */}
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[#FAFAFA] tracking-tight relative z-10">
                  <span className="block relative">
                    axmed.
                    <div className="absolute -top-1 sm:-top-2 -right-4 sm:-right-8 w-2 sm:w-3 h-2 sm:h-3 bg-[#FAFAFA]/20 rounded-full animate-pulse"></div>
                  </span>
                  <span className="text-[#FAFAFA]/30 relative">
                    .
                    <div className="absolute top-0 left-1 sm:left-2 text-xs text-[#FAFAFA]/20 font-normal">∞</div>
                  </span>
                </h1>
                {/* Subtle mathematical overlay - responsive sizing */}
                <div className="absolute top-2 sm:top-4 -left-2 sm:-left-4 text-4xl sm:text-6xl lg:text-8xl text-[#FAFAFA]/3 font-thin -z-10 select-none">∫</div>
              </div>
              
              {/* Rotating philosophical quotes - mobile optimized */}
              <div className="relative h-16 sm:h-20 overflow-hidden">
                {philosophicalQuotes.map((quote, index) => (
                  <p 
                    key={index}
                    className={`
                      absolute inset-0 text-sm sm:text-base lg:text-xl text-[#FAFAFA]/80 leading-relaxed max-w-sm sm:max-w-lg font-light italic px-2 sm:px-0
                      transition-all duration-1000 ease-in-out
                      ${philosophyIndex === index 
                        ? 'opacity-100 translate-y-0' 
                        : index === (philosophyIndex - 1 + philosophicalQuotes.length) % philosophicalQuotes.length
                          ? 'opacity-0 -translate-y-8'
                          : 'opacity-0 translate-y-8'
                      }
                    `}
                  >
                    "{quote}"
                  </p>
                ))}
              </div>
            </div>

            {/* Enhanced Tech Stack with philosophical framing - mobile optimized */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start">
                <Code2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#FAFAFA]/60" />
                <h3 className="text-xs sm:text-sm font-semibold text-[#FAFAFA]/60 uppercase tracking-wider">
                  Logical Tools & Languages:
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#FAFAFA]/20 to-transparent max-w-20 sm:max-w-none"></div>
              </div>
              
              {/* Animated tech display - mobile grid layout */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <div
                    key={tech}
                    className={`
                      relative px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-full border transition-all duration-600 ease-out group cursor-pointer text-center
                      ${currentTech === index 
                        ? 'bg-[#FAFAFA]/15 border-[#FAFAFA]/40 text-[#FAFAFA] scale-105 sm:scale-110 shadow-2xl' 
                        : 'bg-[#FAFAFA]/6 border-[#FAFAFA]/15 text-[#FAFAFA]/70 hover:bg-[#FAFAFA]/10 hover:border-[#FAFAFA]/25 hover:scale-105'
                      }
                    `}
                  >
                    <span className="text-xs sm:text-sm font-medium relative z-10">{tech}</span>
                    {currentTech === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/10 to-[#FAFAFA]/5 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophical CTA - mobile optimized */}
            <div className={`transition-all duration-1200 delay-400 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <button className="group relative inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 bg-[#FAFAFA]/10 hover:bg-[#FAFAFA]/15 backdrop-blur-xl rounded-full border border-[#FAFAFA]/25 hover:border-[#FAFAFA]/40 text-[#FAFAFA] hover:scale-105 transition-all duration-400 shadow-xl hover:shadow-2xl overflow-hidden">
                <span className="text-sm sm:text-base font-medium relative z-10">Explore the Logic</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-2 transition-transform duration-400 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAFAFA]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          {/* Enhanced Profile Image with philosophical depth - mobile optimized */}
          <div className={`flex justify-center transition-all duration-1200 delay-300 ease-out order-first lg:order-last ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative group">
              {/* Ultra-enhanced mathematical orbit rings - responsive sizing */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-1/2 left-1/2 w-72 sm:w-80 lg:w-[28rem] h-72 sm:h-80 lg:h-[28rem] border border-[#FAFAFA]/8 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin hover:border-[#FAFAFA]/15 transition-colors duration-1000" style={{animationDuration: '80s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 border border-[#FAFAFA]/12 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin hover:border-[#FAFAFA]/20 transition-colors duration-1000" style={{animationDuration: '60s', animationDirection: 'reverse'}}></div>
                <div className="absolute top-1/2 left-1/2 w-52 sm:w-60 lg:w-64 h-52 sm:h-60 lg:h-64 border border-[#FAFAFA]/6 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin hover:border-[#FAFAFA]/12 transition-colors duration-1000" style={{animationDuration: '100s'}}></div>
                
                {/* Orbital mathematical symbols - responsive sizing */}
                <div className="absolute top-1/2 left-1/2 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{animationDuration: '120s'}}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base sm:text-lg text-[#FAFAFA]/20">φ</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-base sm:text-lg text-[#FAFAFA]/20">ψ</div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base sm:text-lg text-[#FAFAFA]/20">ω</div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-base sm:text-lg text-[#FAFAFA]/20">α</div>
                </div>
              </div>
              
              {/* Ultra-enhanced glow effect - responsive sizing */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#FAFAFA]/30 via-[#FAFAFA]/20 to-[#FAFAFA]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl group-hover:blur-3xl sm:group-hover:blur-[40px] transition-all duration-700 opacity-50 group-hover:opacity-80 animate-pulse" style={{animationDuration: '4s'}}></div>
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-[#FAFAFA]/15 to-[#FAFAFA]/25 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-90"></div>
              
              {/* Image container with philosophical frame - responsive sizing */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 z-10">
                <div className="w-full h-full bg-gradient-to-br from-[#FAFAFA]/12 via-[#FAFAFA]/8 to-[#FAFAFA]/6 rounded-2xl sm:rounded-3xl border border-[#FAFAFA]/20 backdrop-blur-xl overflow-hidden group-hover:scale-105 transition-all duration-700 ease-out shadow-2xl">
                  <img 
                    src="https://i.pinimg.com/736x/12/5c/c1/125cc1bb389b7ab048f34bc2958f5239.jpg" 
                    alt="Ahmed" 
                    className="w-full h-full object-cover"
                  /> 
                </div>
                
                {/* Enhanced floating badge with philosophical touch - mobile optimized */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#09090B]/90 backdrop-blur-2xl rounded-full border border-[#FAFAFA]/30 shadow-2xl group">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-xs sm:text-sm font-medium text-[#FAFAFA]">Seeking Truth</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;