import Tim from "./assets/tesla.svg";
import Ufo from "./assets/Logo ufo .svg";
import Roll from "./assets/Logo roll.svg";
import Payment from "./assets/payment.svg";
import Ipsum from "./assets/Logo ipsum.svg";
import Infinity from "./assets/Logo infinity.svg";
import Member from "./assets/Vector member.svg";
import Roll1 from "./assets/Logo roll.svg";
function TimSmithSection() {
  return (
    <>
      <div className="flex justify-around py-[2rem]">
        <div className="w-[25%]">
          <img className="w-full" src={Tim} alt="" />
        </div>

        <div className="w-[50%]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            est quia, a voluptatum minima amet quasi. Sit quos recusandae, vel
            illo voluptate totam! Odio eaque quia consectetur blanditiis minus
            iste!
          </p>

          <h1>Tim Smith</h1>
          <p>British dragon boat racing association.</p>

          <div className="flex justify-around items-center ">
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
              <img className="w-full" src={Infinity} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Member} alt="" />
            </div>
            <div className="w-[5%]">
              <img className="w-full" src={Roll} alt="" />
            </div>
            
            <p>Meet All Customer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimSmithSection;
