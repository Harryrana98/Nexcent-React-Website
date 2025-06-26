// import Rafiki from "./assets/rafiki.svg"
// function SpendingSection() {
//   return (
//     <>
//     <div className="p-[2rem] flex justify-around  items-center">
//         <div className="w-[40%]">
//             <img className="w-full" src={Rafiki} alt="" />
//         </div>
//         <div className="w-[38%]">
//             <h1  className="text-2xl font-bold">The unseen of spending three years at pixcelgrade</h1>
//             <p className="text-gray-500 text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa rerum voluptate ex recusandae molestiae illo, incidunt modi quibusdam quod? Quibusdam facilis minima sit exercitationem hic veritatis voluptate incidunt. Perferendis, sapiente!</p>
//         </div>
//     </div>
    
//     </>
//   )
// }

// export default SpendingSection

import Rafiki from "./assets/rafiki.svg";

function SpendingSection() {
  return (
    <div className="px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 font-poppins">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          The unseen of spending three years at Pixcelgrade
        </h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum
          voluptate ex recusandae molestiae illo, incidunt modi quibusdam quod?
          Quibusdam facilis minima sit exercitationem hic veritatis voluptate
          incidunt. Perferendis, sapiente!
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={Rafiki} alt="Illustration" className="w-[80%] md:w-full" />
      </div>
    </div>
  );
}

export default SpendingSection;
