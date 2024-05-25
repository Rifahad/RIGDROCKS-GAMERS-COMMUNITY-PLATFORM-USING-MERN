import { useEffect, useRef } from "react";
import gsap from "gsap";
import CursorImg from "../../assets/Logo/Cursor.png";

function Cursor() {
  const circle = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
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
    animateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={circle}
        className="drop-shadow-lg shadow-black z-50 fixed top-0 left-0 will-change-transform"
      >
        <img src={CursorImg} className="w-[40px] h-[40px] -rotate-45" alt="" />
      </div>
    </>
  );
}

export default Cursor;
