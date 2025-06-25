import Pana from "./assets/pana.svg"
function DesignSection() {
  return (

    <>
     <div className="p-[2rem] flex justify-around  items-center">
            <div className="w-[40%]">
                <img className="w-full" src={Pana} alt="" />
            </div>
            <div className="w-[37%]">
                <h1  className="text-2xl font-bold">How to design your site footer like we did?</h1>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis aliquid id ipsam nisi! Sunt quaerat ipsam accusantium nemo molestias omnis alias est voluptas maiores, nihil porro ipsum? Dolor, ipsa!</p>
                <button className="p-2 text-sm text-white bg-green-500  rounded-xl mt-4">Learn more</button>
            </div>
        </div>
    </>
  )
}

export default DesignSection