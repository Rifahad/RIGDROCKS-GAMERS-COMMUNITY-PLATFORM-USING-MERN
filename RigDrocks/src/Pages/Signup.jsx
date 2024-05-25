import Header from "../Components/User/Header";
import Footer from "../Components/User/Footer";
import YellowLady from "../assets/Characters/YellowLady.png"

function Signup() {
  return (
    <>
      <Header />
      <div className="flex h-screen w-full">
      <div className="relative w-full h-full border bg-white">
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[38rem] border-t-[#FFF632] border-r-[60rem] border-r-transparent z-10"></div>
        <div className="absolute top-0 left-0 w-[50%] h-full z-20 flex items-center justify-center">
            <div className="w-[60%] h-[80%] bg-black bg-opacity-40 rounded-lg">

            </div>
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-full z-20 flex items-center justify-center">
            <img src={YellowLady} className="w-[800px]" alt=""/>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Signup;
