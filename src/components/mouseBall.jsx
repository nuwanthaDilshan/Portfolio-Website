import { useEffect, useState } from "react";

export default function MouseBall() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    return (
      <>
        {/* Small Ball */}
        <div
          className="w-[10px] h-[10px] bg-[#f9dfc7] rounded-full fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-normal duration-100 z-50"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        ></div>
      </>
    );
}