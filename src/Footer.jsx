// import logo from "./assets/Logonex.svg";
// import { GrSend } from "react-icons/gr";
// import {Link} from "react-router-dom"

// function Footer() {
//   return (
//     <>
//     <div className=" bg-[rgba(0,0,0,0.968)] py-10 px-3 flex justify-between">
//         <div className="">
//             <img  src={logo}  className="fill-white w-[100%] " alt="" />
//         </div>

//         <div className="text-white">
//             <h3 className="font-bold">Company</h3>
//             <ul className="text-xs leading-8">
//               <li>About us</li>
//                 <li>Blog</li>
//                 <li>Contact us</li>
//                 <li>Pricing</li>
//                 <li>Testimonials</li>
//             </ul>
//         </div>

//         <div className="text-white">
//           <h3 className="font-bold">Support</h3>
//           <ul className="text-xs leading-8">
//             <li>Help center</li>
//             <li>Term of service</li>
//             <li>Legal</li>
//             <li>Privacy policy</li>
//             <li>Status</li>
//           </ul>
//         </div>


//         <div className="text-white flex items-center w-[35%] relative ">
//           <div>

//           <h3 className="font-bold">Stay up to date</h3> 
//           <input  type="text" name="" id="" placeholder="Your email address" className="text-white text-sm flex mt-1 p-2 bg-[rgba(0,0,0,0.58)]"  /><GrSend className="absolute left-40 bottom-17 text-xl"/>
//           </div>
//         </div>

//     </div>
//     </>
//   )
// }

// export default Footer

import logo from "./assets/Logonex.svg";
import { GrSend } from "react-icons/gr";

function Footer() {
  return (
    <footer className="bg-black text-white font-poppins px-6 py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-12">

        {/* Logo */}
        <div className="lg:w-1/4">
          <img src={logo} alt="Logo" className="w-[150px]" />
        </div>

        {/* Company Links */}
        <div className="lg:w-1/4">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="text-sm space-y-2">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="lg:w-1/4">
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="text-sm space-y-2">
            <li>Help center</li>
            <li>Term of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:w-1/4">
          <h3 className="font-bold mb-2">Stay up to date</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 pr-10 text-sm rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
            <GrSend className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
