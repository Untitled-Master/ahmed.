function Footer() {
    return (
      <footer className="bg-[#09090B] text-[#FAFAFA]">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <p>&copy; 2025 Ahmed Belmehnouf. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  