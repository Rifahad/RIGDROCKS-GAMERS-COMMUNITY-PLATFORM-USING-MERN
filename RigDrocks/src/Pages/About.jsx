import Header from "../Components/User/Header";
import Footer from "../Components/User/Footer";
import VideoIcon from "../assets/Icons/video.png"
function About() {
  return (
    <>
      <Header />

      {/* <div className="w-full h-screen bg-transparent z-10 relative flex">
        <div className="h-full w-[30%] bg-transparent flex items-center justify-center">
          <img src={BlueLady} alt="blueLady"/>
        </div>
        <div className="w-[70%] h-full bg-transparent" >

        </div>
      </div> */}

      <div className="min-h-[600px] overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('E:/React/RigDrocks/RigDrocks/src/assets/Background/wp8213659-valorant-live-wallpapers.png')]">
        <div className="w-full h-full flex justify-center mt-[150px]">
          <div className="bg-black bg-opacity-50 p-4 flex items-center justify-center flex-col">
            <div className="font-inter text-2xl font-extrabold tracking-tight text-white">
              Majestic peaks, nature's embrace.
            </div>
            <div className="mt-1 text-sm font-medium text-slate-300">
              Adventure calls, conquer mountain trails.
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              In the realm of towering mountains, where the air is crisp and the
              vistas stretch endlessly, one finds solace, exhilaration, and a
              profound connection with the untamed beauty of the natural world.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              As the sun rises over the rugged peaks, casting a golden glow on
              the majestic landscape, a sense of awe fills the heart, reminding
              us of the grandeur and power that reside in the mountains.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[600px] w-full bg-black flex items-center justify-evenly">
        {/* <h1>What we</h1> */}
        <div className="w-[150px] h-[150px] border-2 rounded-full flex flex-col items-center justify-center gap-2">
        <img src={VideoIcon} className="w-[20%]" alt="" />
        <h3 className="text-white">Video Calling</h3>
        </div>
        <div className="w-[150px] h-[150px] border-2 rounded-full flex flex-col items-center justify-center">
        <img src={VideoIcon} className="w-[30%]" alt="" />
        <h3 className="text-white">Live Streaming</h3>
        </div>
        <div className="w-[150px] h-[150px] border-2 rounded-full flex flex-col items-center justify-center">
        <img src={VideoIcon} className="w-[30%]" alt="" />
        <h3 className="text-white">Video Calling</h3>
        </div>
        <div className="w-[150px] h-[150px] border-2 rounded-full flex flex-col items-center justify-center">
        <img src={VideoIcon} className="w-[30%]" alt="" />
        <h3 className="text-white">Video Calling</h3>
        </div>
      </div>
      <div className="min-h-[600px] overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-[url('E:\React\RigDrocks\RigDrocks\src\assets\Background\wp8576825-valorant-animated-wallpapers.jpg')]">
        <div className="w-full h-full flex justify-center mt-[150px]">
          <div className="bg-black bg-opacity-50 p-4 flex items-center justify-center flex-col">
            <div className="font-inter text-2xl font-extrabold tracking-tight text-white">
              Majestic peaks, nature's embrace.
            </div>
            <div className="mt-1 text-sm font-medium text-slate-300">
              Adventure calls, conquer mountain trails.
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              In the realm of towering mountains, where the air is crisp and the
              vistas stretch endlessly, one finds solace, exhilaration, and a
              profound connection with the untamed beauty of the natural world.
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              As the sun rises over the rugged peaks, casting a golden glow on
              the majestic landscape, a sense of awe fills the heart, reminding
              us of the grandeur and power that reside in the mountains.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
