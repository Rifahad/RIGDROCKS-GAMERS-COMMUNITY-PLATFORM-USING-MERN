import { GiClick } from "react-icons/gi";
import Header from "../Components/User/Header";
import Boy from "../assets/Characters/YellowGuy.webp";
import Footer from "../Components/User/Footer";
import Cursor from "../Components/User/Cursor";

function Login() {
  return (
    <>
    <Cursor/>
    <Header borderColor="#F2D68D" />
      <div className="w-full h-[800px] flex sm:flex-row flex-col bg-[url('./src/assets/Background/stars-bg.png')]">
        <div className="w-[50%] h-full">
          <img src={Boy} alt="" />
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-[90%] sm:w-[50%] h-[30%] sm:h-[50%] shadow-inner shadow-[#F2D68D] rounded flex flex-col items-center justify-center gap-10 ">
            <h1 className="sm:text-3xl font-rye text-white">Login Here</h1>
            <div className="flex gap-3">
            <label htmlFor="" className="text-white">Username</label>
            <input className="bg-transparent shadow-sm shadow-[#F2D68D] rounded" type="text" />
            </div>
            <div className="flex gap-3">
            <label htmlFor="" className="text-white">Password</label>
            <input className="bg-transparent shadow-sm shadow-[#F2D68D] rounded" type="password" />
            </div>
            <span className="text-white flex items-end gap-2"> New user <a href="/signup" className="text-[#F2D68D]">Signup</a> <GiClick className="text-[#F2D68D]" /> </span>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
