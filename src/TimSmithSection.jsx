import Tim from "./assets/tesla.svg";
import Ufo from "./assets/Logo ufo .svg";
import Roll from "./assets/Logo roll.svg";
import Payment from "./assets/payment.svg";
import Ipsum from "./assets/Logo ipsum.svg";
import Infinity1 from "./assets/Logo infinity.svg";
import Member from "./assets/Vector member.svg";
import { FaArrowRightLong } from "react-icons/fa6";
// import Roll1 from "./assets/Logo roll.svg";
function TimSmithSection() {
  return (
    <>
      <div className="flex justify-around py-[2rem] bg-gray-300 items-center">
        <div className="w-[20%]">
          <img className="w-full" src={Tim} alt="" />
        </div>

        <div className="w-[48%]">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            est quia, a voluptatum minima amet quasi. Sit quos recusandae, vel
            illo voluptate totam! Odio eaque quia consectetur blanditiis minus
            iste!
          </p>

          <h1 className="text-xl font-bold mt-4">Tim Smith</h1>
          <p className="text-gray-500 text-sm">British dragon boat racing association.</p>

          <div className="flex justify-around items-center mt-10 ">
            <div className="w-[5%]">
              <img className="w-full" src={Ufo} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Roll} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Payment} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Ipsum} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Infinity1} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Member} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Roll} alt="" />
            </div>
            
            <p className="flex items-center gap-2 text-xs text-green-600">Meet All Customer <span className="text-gray-500 text-lg">< FaArrowRightLong /> </span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimSmithSection;
