import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CursorImg from "../../assets/Logo/Cursor.png";

function Cursor() {
  const circle = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      console.log("Mouse down");
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      console.log("Mouse up");
      setIsClicked(false);
    };

    const lerp = (x, y, alpha) => x + (y - x) * alpha;

    const animateCursor = () => {
      delayedMouse.current = {
        x: lerp(delayedMouse.current.x, mouse.current.x, 0.075),
        y: lerp(delayedMouse.current.y, mouse.current.y, 0.075),
      };
      gsap.set(circle.current, {
        x: delayedMouse.current.x,
        y: delayedMouse.current.y,
        xPercent: -50,
        yPercent: -50,
      });
      requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={circle}
        className={`drop-shadow-lg shadow-black z-50 fixed top-0 left-0 will-change-transform ${
          isClicked ? "transform scale-90" : ""
        }`}
      >
        <img
          src={CursorImg}
          className="w-[40px] h-[40px] -rotate-45"
          alt="Custom cursor"
        />
      </div>
    </>
  );
}

export default Cursor;
