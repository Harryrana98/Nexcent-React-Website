import Icon from "./assets/icon.svg";

function CommunitySection() {
  return (
    <>
      <div className="py-[1rem] ">
        <div className="m-auto text-center w-[40%]">
          <h2 className="text-2xl font-bold">
            Manage your entire community in a single system.
          </h2>
          <p className="text-gray-500">Who is nexcent suitable for?.</p>
        </div>

        <div className="flex justify-around p-[2rem]">
          <div className="w-[25%] p-[2rem] text-center  shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-lg">
            <div className="mx-auto w-[20%] ">
              <img className="w-full" src={Icon} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Membership Organisation</h1>
            <p className="text-xs text-gray-500">
              Our Membership Management software provides full automation of
              membership renevals and payments.
            </p>
          </div>
          <div className="w-[25%] p-[2rem] text-center  shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-lg">
            <div className="mx-auto w-[20%] ">
              <img className="w-full" src={Icon} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Membership Organisation</h1>
            <p className="text-xs text-gray-500">
              Our Membership Management software provides full automation of
              membership renevals and payments.
            </p>
          </div>
          <div className="w-[25%] p-[2rem] text-center  shadow-[2px_2px_4px_rgba(0,0,0,0.3)] rounded-lg">
            <div className="mx-auto w-[20%] ">
              <img className="w-full" src={Icon} alt="" />
            </div>
            <h1 className="text-2xl font-bold">Membership Organisation</h1>
            <p className="text-xs text-gray-500">
              Our Membership Management software provides full automation of
              membership renevals and payments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunitySection;
