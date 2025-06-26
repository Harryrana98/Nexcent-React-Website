// import Pana from "./assets/pana.svg"
// function DesignSection() {
//   return (

//     <>
//      <div className="p-[2rem] flex justify-around  items-center">
//             <div className="w-[40%]">
//                 <img className="w-full" src={Pana} alt="" />
//             </div>
//             <div className="w-[37%]">
//                 <h1  className="text-2xl font-bold">How to design your site footer like we did?</h1>
//                 <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis aliquid id ipsam nisi! Sunt quaerat ipsam accusantium nemo molestias omnis alias est voluptas maiores, nihil porro ipsum? Dolor, ipsa!</p>
//                 <button className="p-2 text-sm text-white bg-green-500  rounded-xl mt-4">Learn more</button>
//             </div>
//         </div>
//     </>
//   )
// }

// export default DesignSection

import Pana from "./assets/pana.svg";

function DesignSection() {
  return (
    <div className="px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 font-poppins bg-white">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={Pana} alt="Design Illustration" className="w-[80%] md:w-full" />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          How to design your site footer like we did?
        </h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis aliquid id ipsam nisi!
          Sunt quaerat ipsam accusantium nemo molestias omnis alias est voluptas maiores, nihil porro ipsum? Dolor, ipsa!
        </p>
        <button className="mt-6 px-6 py-2 text-sm bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default DesignSection;
