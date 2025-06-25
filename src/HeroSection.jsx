import DesktopImg from "./assets/Illustration.svg"
function HeroSection() {
  return (
    <>

    <div className="flex items-center justify-around py-[2rem] bg-gray-100">
        <div className="w-[40%] ">
            <h1 className="text-[40px] font-bold leading-[4rem]">Lessons and insights <span className="text-green-500">from 8 years</span></h1>
            <p className="text-[12px] text-gray-400">where to grow your business as a photographer:sight or social media?</p>
            <button className="px-4 py-2 rounded mt-10 bg-green-600 font-semibold  text-white">Register</button>
        </div>
        <div className="w-[30%]">
            <img src={DesktopImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default HeroSection