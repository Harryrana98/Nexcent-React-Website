import logo from "./assets/Logo.svg";

function Header() {
  return (
    <>
      <div className="flex justify-between bg-white p-3 items-center font-poppins">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="flex gap-3 text-gray-400 font-normal ">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonal</li>
          <li>FAQ</li>
        </ul>
        <div className="flex gap-3">
           <button className="text-green-500 font-medium ">Login</button>
            <button className="bg-green-500 p-1.5 rounded text-white">Signup</button>
        </div>
      </div>
    </>
  );
}

export default Header;
