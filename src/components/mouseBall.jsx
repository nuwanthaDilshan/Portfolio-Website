import { useEffect, useState } from "react";

export default function MouseBall() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ballColor, setBallColor] = useState("#f9dfc7");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

      const elementUnderCursor = document.elementFromPoint(
        event.clientX,
        event.clientY
      );

      if (elementUnderCursor) {
        const tagName = elementUnderCursor.tagName;

        if (["H1", "H2", "H3", "P", "SPAN", "A", "BUTTON"].includes(tagName)) {
          setBallColor("#ff6347"); // Tomato color for text-related elements
        } else if (tagName === "IMG") {
          setBallColor("#062239"); // Custom color for images
        } else {
          setBallColor("#f9dfc7"); // Default ball color
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-[10px] h-[10px] rounded-full fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 z-50"
      style={{
        backgroundColor: ballColor,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
}
