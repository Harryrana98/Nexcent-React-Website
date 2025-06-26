// import Icon from "./assets/Icon.svg";

// function CommunitySection() {
//   return (
//     <>
//       <div className="py-[1rem] ">
//         <div className="m-auto text-center w-[40%]">
//           <h2 className="text-2xl font-bold">
//             Manage your entire community in a single system.
//           </h2>
//           <p className="text-gray-500">Who is nexcent suitable for?.</p>
//         </div>

//         <div className="flex justify-around p-[2rem]">
//           <div className="w-[25%] p-[2rem] text-center  shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-lg">
//             <div className="mx-auto w-[20%] ">
//               <img className="w-full" src={Icon} alt="" />
//             </div>
//             <h1 className="text-2xl font-bold">Membership Organisation</h1>
//             <p className="text-xs text-gray-500">
//               Our Membership Management software provides full automation of
//               membership renevals and payments.
//             </p>
//           </div>
//           <div className="w-[25%] p-[2rem] text-center  shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-lg">
//             <div className="mx-auto w-[20%] ">
//               <img className="w-full" src={Icon} alt="" />
//             </div>
//             <h1 className="text-2xl font-bold">Membership Organisation</h1>
//             <p className="text-xs text-gray-500">
//               Our Membership Management software provides full automation of
//               membership renevals and payments.
//             </p>
//           </div>
//           <div className="w-[25%] p-[2rem] text-center  shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-lg">
//             <div className="mx-auto w-[20%] ">
//               <img className="w-full" src={Icon} alt="" />
//             </div>
//             <h1 className="text-2xl font-bold">Membership Organisation</h1>
//             <p className="text-xs text-gray-500">
//               Our Membership Management software provides full automation of
//               membership renevals and payments.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CommunitySection;


import Icon from "./assets/Icon.svg";

function CommunitySection() {
  return (
    <div className="py-10 px-4 font-poppins bg-white">
      
      {/* Heading Section */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Manage your entire community in a single system.
        </h2>
        <p className="text-gray-500 text-sm">Who is Nexcent suitable for?</p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="p-6 text-center shadow-md rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mx-auto mb-4 w-16">
              <img src={Icon} alt="Icon" className="w-full" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Membership Organisation</h3>
            <p className="text-sm text-gray-500">
              Our Membership Management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunitySection;

