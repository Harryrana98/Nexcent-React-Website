import Image18 from "./assets/image 18.svg";
import Image19 from "./assets/image 19.svg";
import Image20 from "./assets/image 20.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function MarketingSection() {
  return (
    <>
      <div className="m-auto text-center py-[2rem] w-[50%]">
        <h1 className="text-2xl font-bold">Caring is the new marketing</h1>
        <p className="text-xs text-gray-500">
          The nextcent place is the best place to read about the latest
          membership inside trends and more.see who;s joining the community,read
          about how the community are increasing their membership income and
          lots more.
        </p>
      </div>

      <div className="p-[2rem] relative flex justify-around">
        <div className="w-[28%]">
          <div  className="">
            <img className="" src={Image18} alt="" />
          </div>
          <div className="shadow-[1px_1px_4px_1px_rgba(0,0,0,0.3)] bg-white w-[20%] text-center p-4 rounded text-sm  absolute left-26 top-[15.5rem]">
            <p>Creating streamlined safeguarding processes with oneRen.</p>
            <p className="text-green-700 text-xs flex items-center justify-center gap-1  "> Read More<span className="text-sm text-gray-500"> < FaArrowRightLong /></span></p>
          </div>
        </div>
        <div className="w-[28%]">
          <div  className="">
            <img className="" src={Image19} alt="" />
          </div>
          <div className="shadow-[1px_1px_4px_1px_rgba(0,0,0,0.3)] bg-white w-[20%] text-center p-4 rounded text-sm  absolute left-[31.5rem] top-[15.5rem]">
            <p>Creating streamlined safeguarding processes with oneRen.</p>
            <p className="text-green-700 text-xs flex items-center justify-center gap-1  "> Read More<span className="text-sm text-gray-500"> < FaArrowRightLong /></span></p>
          </div>
        </div>
        <div className="w-[28%]">
          <div  className="">
            <img className="" src={Image20} alt="" />
          </div>
          <div className="shadow-[1px_1px_4px_1px_rgba(0,0,0,0.3)] bg-white w-[20%] text-center p-4 rounded text-sm  absolute right-[6.5rem] top-[15.5rem]">
            <p>Creating streamlined safeguarding processes with oneRen.</p>
            <p className="text-green-700 text-xs flex items-center justify-center gap-1  "> Read More<span className="text-sm text-gray-500"> < FaArrowRightLong /></span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketingSection;
