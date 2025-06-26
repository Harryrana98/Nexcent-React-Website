// import Tim from "./assets/tesla.svg";
// import Ufo from "./assets/Logo ufo .svg";
// import Roll from "./assets/Logo roll.svg";
// import Payment from "./assets/payment.svg";
// import Ipsum from "./assets/Logo ipsum.svg";
// import Infinity1 from "./assets/Logo infinity.svg";
// import Member from "./assets/Vector member.svg";
// import { FaArrowRightLong } from "react-icons/fa6";
// // import Roll1 from "./assets/Logo roll.svg";
// function TimSmithSection() {
//   return (
//     <>
//       <div className="flex justify-around py-[2rem] bg-gray-300 items-center">
//         <div className="w-[20%]">
//           <img className="w-full" src={Tim} alt="" />
//         </div>

//         <div className="w-[48%]">
//           <p className="text-sm text-gray-500">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
//             est quia, a voluptatum minima amet quasi. Sit quos recusandae, vel
//             illo voluptate totam! Odio eaque quia consectetur blanditiis minus
//             iste!
//           </p>

//           <h1 className="text-xl font-bold mt-4">Tim Smith</h1>
//           <p className="text-gray-500 text-sm">British dragon boat racing association.</p>

//           <div className="flex justify-around items-center mt-10 ">
//             <div className="w-[5%]">
//               <img className="w-full" src={Ufo} alt="" />
//             </div>
//             <div className="w-[5%]">
//               <img className="w-full" src={Roll} alt="" />
//             </div>
//             <div className="w-[5%]">
//               <img className="w-full" src={Payment} alt="" />
//             </div>
//             <div className="w-[5%]">
//               <img className="w-full" src={Ipsum} alt="" />
//             </div>
//             <div className="w-[5%]">
//               <img className="w-full" src={Infinity1} alt="" />
//             </div>
//             <div className="w-[5%]">
//               <img className="w-full" src={Member} alt="" />
//             </div>
//             <div className="w-[5%]">
//               <img className="w-full" src={Roll} alt="" />
//             </div>
            
//             <p className="flex items-center gap-2 text-xs text-green-600">Meet All Customer <span className="text-gray-500 text-lg">< FaArrowRightLong /> </span></p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TimSmithSection;

import Tim from "./assets/tesla.svg";
import Ufo from "./assets/Logo ufo .svg";
import Roll from "./assets/Logo roll.svg";
import Payment from "./assets/payment.svg";
import Ipsum from "./assets/Logo ipsum.svg";
import Infinity1 from "./assets/Logo infinity.svg";
import Member from "./assets/Vector member.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function TimSmithSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-12 bg-gray-200 font-poppins">
      
      {/* Left Image */}
      <div className="w-full lg:w-[30%]">
        <img className="w-full max-w-xs mx-auto" src={Tim} alt="Tim" />
      </div>

      {/* Right Text + Clients */}
      <div className="w-full lg:w-[65%]">
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          est quia, a voluptatum minima amet quasi. Sit quos recusandae, vel
          illo voluptate totam! Odio eaque quia consectetur blanditiis minus
          iste!
        </p>

        <h2 className="text-xl font-bold">Tim Smith</h2>
        <p className="text-sm text-gray-500 mb-6">
          British Dragon Boat Racing Association
        </p>

        {/* Logos + Link */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {[Ufo, Roll, Payment, Ipsum, Infinity1, Member, Roll].map((logo, i) => (
            <img key={i} src={logo} alt={`logo-${i}`} className="w-12 h-10 object-contain" />
          ))}

          {/* CTA Button */}
          <button className="flex items-center gap-2 text-green-600 text-sm font-medium hover:underline mt-2">
            Meet All Customers <FaArrowRightLong className="text-gray-600 text-base" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimSmithSection;

