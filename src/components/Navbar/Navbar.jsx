import { FaGithub, FaInstagram } from "react-icons/fa";

function Navbar() {
    return (
      <nav className="bg-[#09090B] text-[#FAFAFA] py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-semibold">
            <a href="https://github.com/Untitled-Master" className="hover:text-gray-400">ahmed.</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <FaGithub  className="mr-1" />
            </a>
            <a href="https://instagram.com/untitledmaster" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <FaInstagram  className="mr-1" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  