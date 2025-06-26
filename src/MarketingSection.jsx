// import Image18 from "./assets/image 18.svg";
// import Image19 from "./assets/image 19.svg";
// import Image20 from "./assets/image 20.svg";
// import { FaArrowRightLong } from "react-icons/fa6";

// function MarketingSection() {
//   return (
//     <>
//       <div className="m-auto text-center py-[2rem] w-[50%]">
//         <h1 className="text-2xl font-bold">Caring is the new marketing</h1>
//         <p className="text-xs text-gray-500">
//           The nextcent place is the best place to read about the latest
//           membership inside trends and more.see who;s joining the community,read
//           about how the community are increasing their membership income and
//           lots more.
//         </p>
//       </div>

//       <div className="p-[2rem] relative flex justify-around">
//         <div className="w-[28%]">
//           <div  className="">
//             <img className="" src={Image18} alt="" />
//           </div>
//           <div className="shadow-[1px_1px_4px_1px_rgba(0,0,0,0.3)] bg-white w-[20%] text-center p-4 rounded text-sm  absolute left-26 top-[15.5rem]">
//             <p>Creating streamlined safeguarding processes with oneRen.</p>
//             <p className="text-green-700 text-xs flex items-center justify-center gap-1  "> Read More<span className="text-sm text-gray-500"> < FaArrowRightLong /></span></p>
//           </div>
//         </div>
//         <div className="w-[28%]">
//           <div  className="">
//             <img className="" src={Image19} alt="" />
//           </div>
//           <div className="shadow-[1px_1px_4px_1px_rgba(0,0,0,0.3)] bg-white w-[20%] text-center p-4 rounded text-sm  absolute left-[31.5rem] top-[15.5rem]">
//             <p>Creating streamlined safeguarding processes with oneRen.</p>
//             <p className="text-green-700 text-xs flex items-center justify-center gap-1  "> Read More<span className="text-sm text-gray-500"> < FaArrowRightLong /></span></p>
//           </div>
//         </div>
//         <div className="w-[28%]">
//           <div  className="">
//             <img className="" src={Image20} alt="" />
//           </div>
//           <div className="shadow-[1px_1px_4px_1px_rgba(0,0,0,0.3)] bg-white w-[20%] text-center p-4 rounded text-sm  absolute right-[6.5rem] top-[15.5rem]">
//             <p>Creating streamlined safeguarding processes with oneRen.</p>
//             <p className="text-green-700 text-xs flex items-center justify-center gap-1  "> Read More<span className="text-sm text-gray-500"> < FaArrowRightLong /></span></p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MarketingSection;

import Image18 from "./assets/image 18.svg";
import Image19 from "./assets/image 19.svg";
import Image20 from "./assets/image 20.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function MarketingSection() {
  const cards = [
    { img: Image18, text: "Creating streamlined safeguarding processes with oneRen." },
    { img: Image19, text: "Creating streamlined safeguarding processes with oneRen." },
    { img: Image20, text: "Creating streamlined safeguarding processes with oneRen." },
  ];

  return (
    <div className="py-12 px-4 font-poppins bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Caring is the new marketing
        </h1>
        <p className="text-sm text-gray-500">
          The Nextcent place is the best place to read about the latest membership insight trends and more.
          See who’s joining the community, read about how communities are increasing their income and much more.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <img src={card.img} alt={`Marketing ${index}`} className="w-full h-auto" />
            <div className="p-4 text-center flex flex-col justify-between gap-3">
              <p className="text-sm">{card.text}</p>
              <button className="text-green-600 text-xs font-medium flex items-center justify-center gap-1 hover:underline">
                Read More <FaArrowRightLong className="text-gray-500 text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingSection;

