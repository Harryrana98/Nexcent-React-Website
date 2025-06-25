import logo from "./assets/Logo.svg";
import { GrSend } from "react-icons/gr";
// import {Link} from "react-router-dom"

function Footer() {
  return (
    <>
    <div className=" bg-[rgba(0,0,0,0.938)] py-10 px-3 flex justify-between">
        <div className="">
            <img  src={logo}  className="fill-white w-32" alt="" />
        </div>

        <div className="text-white">
            <h3 className="font-bold">Company</h3>
            <ul className="text-xs leading-8">
              <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
            </ul>
        </div>

        <div className="text-white">
          <h3 className="font-bold">Support</h3>
          <ul className="text-xs leading-8">
            <li>Help center</li>
            <li>Term of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>


        <div className="text-white flex items-center w-[35%] relative ">
          <div>

          <h3 className="font-bold">Stay up to date</h3> 
          <input  type="text" name="" id="" placeholder="Your email address" className="text-white text-sm flex mt-2 p-2 bg-[rgba(0,0,0,0.18)]"  /><GrSend className="absolute left-40 bottom-17 text-xl"/>
          </div>
        </div>

    </div>
    </>
  )
}

export default Footer