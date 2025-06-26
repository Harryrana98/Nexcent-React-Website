// import logo from "./assets/Logo.svg";

// function Header() {
//   return (
//     <>
//       <div className="flex justify-between bg-white p-3 items-center font-poppins">
//         <div className="logo">
//           <img src={logo} alt="" />
//         </div>
//         <ul className="flex gap-3 text-gray-400 font-normal ">
//           <li>Home</li>
//           <li>Service</li>
//           <li>Feature</li>
//           <li>Product</li>
//           <li>Testimonal</li>
//           <li>FAQ</li>
//         </ul>
//         <div className="flex gap-3">
//            <button className="text-green-500 font-medium ">Login</button>
//             <button className="bg-green-500 p-1.5 rounded text-white">Signup</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;


import { useState } from "react";
import logo from "./assets/Logo.svg";
import { Menu, X } from "lucide-react"; // Optional icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-3 font-poppins shadow">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-500 text-sm font-medium">
          <li className="cursor-pointer hover:text-black">Home</li>
          <li className="cursor-pointer hover:text-black">Service</li>
          <li className="cursor-pointer hover:text-black">Feature</li>
          <li className="cursor-pointer hover:text-black">Product</li>
          <li className="cursor-pointer hover:text-black">Testimonial</li>
          <li className="cursor-pointer hover:text-black">FAQ</li>
        </ul>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex gap-3">
          <button className="text-green-500 font-medium">Login</button>
          <button className="bg-green-500 px-4 py-1.5 rounded text-white font-medium">
            Signup
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-gray-600 text-sm">
          <ul className="space-y-2">
            <li className="hover:text-black">Home</li>
            <li className="hover:text-black">Service</li>
            <li className="hover:text-black">Feature</li>
            <li className="hover:text-black">Product</li>
            <li className="hover:text-black">Testimonial</li>
            <li className="hover:text-black">FAQ</li>
          </ul>
          <div className="flex gap-3">
            <button className="text-green-500 font-medium">Login</button>
            <button className="bg-green-500 px-4 py-1.5 rounded text-white font-medium">
              Signup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
