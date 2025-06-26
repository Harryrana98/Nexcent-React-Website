// import Payment from "./assets/payment.svg";
// function ReinventSection() {
//   return (
//     <>
//       <div className="py-[2rem] flex justify-around items-center bg-gray-300">
//         <div className="w-[30%]">
//           <h1 className="text-2xl font-bold">
//             Helping a local{" "}
//             <span className="text-green-500">business reinvent itself</span>{" "}
//           </h1>
//           <p className="text-gray-500 text-sm">We reached here with our hardwork and dedication.</p>
//         </div>

//         <div className="">
//           <div className="p-[25px] flex gap-5">
//             <div className="flex gap-8 items-center">
//               <div>
//                 <img src={Payment} alt="" />
//               </div>

//               <div>
//                 <h1 className="text-xl font-bold">2.245,342</h1>
//                 <p>Members</p>
//               </div>
//             </div>

//             <div className="flex gap-8 items-center">
//               <div>
//                 <img src={Payment} alt="" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold">2.245,342</h1>
//                 <p>Members</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex p-[25px] gap-5">
//             <div className="flex gap-8 items-center">
//               <div>
//                 <img src={Payment} alt="" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold">2.245,342</h1>
//                 <p>Members</p>
//               </div>
//             </div>
//             <div className="flex gap-8 items-center">
//               <div>
//                 <img src={Payment} alt="" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold">2.245,342</h1>
//                 <p>Members</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ReinventSection;


import Payment from "./assets/payment.svg";

function ReinventSection() {
  return (
    <div className="py-10 px-4 flex flex-col lg:flex-row justify-between items-center gap-10 bg-gray-100 font-poppins">
      
      {/* Left Text Section */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold leading-snug">
          Helping a local <span className="text-green-500">business reinvent itself</span>
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          We reached here with our hard work and dedication.
        </p>
      </div>

      {/* Right Stats Section */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white p-4 rounded shadow hover:shadow-md transition-shadow"
          >
            <img src={Payment} alt="Payment Icon" className="w-12 h-12" />
            <div>
              <h2 className="text-xl font-bold">2,245,342</h2>
              <p className="text-sm text-gray-500">Members</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReinventSection;
