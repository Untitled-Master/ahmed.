import { useState } from 'react';
import { Menu, X, User, Briefcase, Images, Phone } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Work', href: '#work', icon: Briefcase },
    { name: 'Gallery', href: '#gal', icon: Images },
    { name: 'Contact', href: '#contact', icon: Phone }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090B] backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-[#FAFAFA] tracking-tight">
              axmed
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-[#FAFAFA]/5 rounded-full px-6 py-2 backdrop-blur-sm border border-white/10">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative flex items-center space-x-2 px-4 py-2 rounded-full
                    text-[#FAFAFA]/70 hover:text-[#FAFAFA] 
                    transition-all duration-300 ease-out
                    hover:bg-[#FAFAFA]/10 hover:scale-105
                    text-sm font-medium group
                    ${index < navItems.length - 1 ? 'mr-2' : ''}
                  `}
                >
                  <IconComponent className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <span className="transition-all duration-300">{item.name}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FAFAFA]/0 to-[#FAFAFA]/0 group-hover:from-[#FAFAFA]/5 group-hover:to-[#FAFAFA]/10 transition-all duration-300"></div>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative inline-flex items-center justify-center p-3 rounded-full bg-[#FAFAFA]/5 text-[#FAFAFA]/70 hover:text-[#FAFAFA] hover:bg-[#FAFAFA]/10 hover:scale-105 transition-all duration-300 ease-out border border-white/10"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-5 h-5">
              <Menu 
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        md:hidden overflow-hidden transition-all duration-500 ease-out
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-6 pt-4 pb-6 bg-[#09090B]/90 backdrop-blur-xl border-t border-white/5">
          <div className="space-y-3">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center space-x-4 px-4 py-3 rounded-2xl
                    text-[#FAFAFA]/70 hover:text-[#FAFAFA]
                    hover:bg-[#FAFAFA]/8 hover:scale-105
                    transition-all duration-300 ease-out
                    text-base font-medium group
                    transform translate-y-4 opacity-0 animate-in
                  `}
                  style={{
                    animation: isMenuOpen ? `slideUp 0.3s ease-out ${index * 0.1}s forwards` : 'none'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="relative">
                    <IconComponent className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="absolute inset-0 bg-[#FAFAFA]/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
                  </div>
                  <span className="transition-all duration-300">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;