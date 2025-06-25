import Ufo from "./assets/Logo ufo .svg"
import Roll from "./assets/Logo roll.svg"
import Payment from "./assets/payment.svg"
import Ipsum from "./assets/Logo ipsum.svg"
import Infinity from "./assets/Logo infinity.svg"
import Member from "./assets/Vector member.svg"
import Roll1 from "./assets/Logo roll.svg"
function Clints() {
  return (
    <>
    <div className="py-[3rem]">

    <div className="text-center">
        <h1 className="text-2xl font-bold">Our Clients</h1>
        <p className="text-gray-500">We have been working with some fortune 500+ clients.</p>
    </div>
    <div className="flex justify-around py-[2rem]">
    <img src={Ufo} alt="" />
    <img src={Roll} alt="" />
    <img src={Payment} alt="" />
    <img src={Ipsum} alt="" />
    <img src={Infinity} alt="" />
    <img src={Member} alt="" />
    <img src={Roll1} alt="" />
    </div>
    </div>
    </>
  )
}

export default Clints