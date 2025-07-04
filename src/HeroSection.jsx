// import DesktopImg from "./assets/Illustration.svg"
// function HeroSection() {
//   return (
//     <>

//     <div className="flex items-center justify-around py-[2rem] bg-gray-100">
//         <div className="w-[40%] ">
//             <h1 className="text-[40px] font-bold leading-[4rem]">Lessons and insights <span className="text-green-500">from 8 years</span></h1>
//             <p className="text-[12px] text-gray-400">where to grow your business as a photographer:sight or social media?</p>
//             <button className="px-4 py-2 rounded mt-10 bg-green-600 font-semibold  text-white">Register</button>
//         </div>
//         <div className="w-[30%]">
//             <img src={DesktopImg} alt="" />
//         </div>
//     </div>
//     </>
//   )
// }

// export default HeroSection



import DesktopImg from "./assets/Illustration.svg";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-gray-100 font-poppins">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-[4rem]">
          Lessons and insights <span className="text-green-500">from 8 years</span>
        </h1>
        <p className="text-sm text-gray-500 mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="px-6 py-2 mt-6 bg-green-600 text-white font-semibold rounded">
          Register
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={DesktopImg} alt="Illustration" className="w-[80%] md:w-[100%]" />
      </div>
    </div>
  );
}

export default HeroSection;
