import Header from "../Components/User/Header";
import BlueLady from "../assets/Characters/BlueLady.png";
import Footer from "../Components/User/Footer";
import Lines from "../Components/User/Lines";
import { CgScrollV } from "react-icons/cg";
import Cursor from "../Components/User/Cursor";

function Home() {
  return (
    <>
      <Header borderColor="#59959F" />
      <div className="flex w-full h-screen  bg-white">
        <div className="h-full w-[25%] bg-transparent flex items-center justify-center">
          <img src={BlueLady} alt="blueLady" />
        </div>
        <div className="h-full w-[50%] bg-transparent flex flex-col items-center justify-center gap-10">
          <h1 className="text-5xl font-bold font-rye">REDROCKS</h1>
          <h2 className="text-lg font-rye">Unleash your inner gamer</h2>
          <p className=" text-center font-rye leading-loose">
            "Unite, Play, Conquer: Where every pixel resonates with the pulse of
            community. Join our platform, where streams flow like rivers, calls
            echo through virtual realms, messages spark alliances, and
            communities forge legends. Together, let's level up our gaming
            experience, not just as players, but as companions on an epic
            journey through the worlds we create and conquer."
          </p>
          <button className="btn btn-primary">Get Started </button>
          <CgScrollV className="animate-bounce text-4xl" />
          <Lines color={"cyan"} />
        </div>
        <div className="h-full w-[25%] bg-transparent flex items-center justify-center">
          <img
            src={BlueLady}
            alt="blueLady"
            className="transform scale-x-[-1]"
          />
        </div>
      </div>
      <div className="h-[600px] w-full bg-black "></div>
      <Footer />
    </> 
  );
}

export default Home;
