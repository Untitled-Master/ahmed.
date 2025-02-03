import { VscAccount, VscInfo, VscHome  } from "react-icons/vsc";

const logo = 'https://i.pinimg.com/1200x/0e/a0/71/0ea07191b9f4ee4c77e040c212e7211c.jpg'
function Navbar() {
    return (
        <nav className="bg-[#09090B] shadow-lg py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <a href="#" className="text-[#FAFAFA] text-2xl font-bold">
                <img 
                    src={logo} 
                    className="w-20 h-20 rounded-2xl" 
                    alt="logo" 
                />
                </a>

                <ul className="flex space-x-8">
                    <li>
                        <a href="#" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <VscHome  className="mr-2" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <VscInfo  className="mr-2" /> About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <VscAccount  className="mr-2" /> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;