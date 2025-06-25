import Payment from "./assets/payment.svg";
function ReinventSection() {
  return (
    <>
      <div className="py-[2rem] flex justify-around items-center bg-gray-300">
        <div className="w-[30%]">
          <h1 className="text-2xl font-bold">
            Helping a local{" "}
            <span className="text-green-500">business reinvent itself</span>{" "}
          </h1>
          <p className="text-gray-500 text-sm">We reached here with our hardwork and dedication.</p>
        </div>

        <div className="">
          <div className="p-[25px] flex gap-5">
            <div className="flex gap-8 items-center">
              <div>
                <img src={Payment} alt="" />
              </div>

              <div>
                <h1 className="text-xl font-bold">2.245,342</h1>
                <p>Members</p>
              </div>
            </div>

            <div className="flex gap-8 items-center">
              <div>
                <img src={Payment} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold">2.245,342</h1>
                <p>Members</p>
              </div>
            </div>
          </div>

          <div className="flex p-[25px] gap-5">
            <div className="flex gap-8 items-center">
              <div>
                <img src={Payment} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold">2.245,342</h1>
                <p>Members</p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div>
                <img src={Payment} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold">2.245,342</h1>
                <p>Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReinventSection;
