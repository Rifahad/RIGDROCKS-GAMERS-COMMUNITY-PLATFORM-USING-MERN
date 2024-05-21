import Header from "../Components/User/Header";
import Footer from "../Components/User/Footer";
import BlueLady from "../assets/Characters/BlueLady.png";

function About() {
  return (
    <>
      <Header />
      
      <div className="w-full h-screen bg-transparent z-10 relative flex">
        <div className="h-full w-[30%] bg-transparent flex items-center justify-center">
          <img src={BlueLady} alt="blueLady"/>
        </div>
        <div className="w-[70%] h-full bg-transparent" >

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
