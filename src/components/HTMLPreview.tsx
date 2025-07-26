import React, { useState, useRef, useEffect } from "react";
import HTMLRender from "../utils/HTMLRender";

const ResizablePreview: React.FC<{ html: string; css: string }> = ({ html, css }) => {
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });
  const [isDragging, setIsDragging] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<"x" | "y" | null>(null);

  const isResizingRef = useRef(false);
  const resizeStartRef = useRef({ x: 0, y: 0, width: 800, height: 400 });
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent, direction: "x" | "y") => {
    e.preventDefault();
    isResizingRef.current = true;
    setIsDragging(true);
    setResizeDirection(direction);
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: dimensions.width,
      height: dimensions.height
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current || !resizeDirection) return;

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

    animationFrameRef.current = requestAnimationFrame(() => {
      const deltaX = e.clientX - resizeStartRef.current.x;
      const deltaY = e.clientY - resizeStartRef.current.y;

      if (resizeDirection === "x") {
        setDimensions((prev) => ({
          ...prev,
          width: Math.max(300, resizeStartRef.current.width + deltaX)
        }));
      }

      if (resizeDirection === "y") {
        setDimensions((prev) => ({
          ...prev,
          height: Math.max(200, resizeStartRef.current.height + deltaY)
        }));
      }
    });
  };

  const handleMouseUp = () => {
    if (isResizingRef.current) {
      isResizingRef.current = false;
      setIsDragging(false);
      setResizeDirection(null);
    }

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [resizeDirection]);

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden relative border border-gray-300 ${
        !isDragging ? "transition-all duration-200 ease-in-out" : ""
      }`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <HTMLRender html={html} css={css} />

      {/* Horizontal resize handle */}
      <div
        className="absolute top-0 right-0 w-2 h-full cursor-ew-resize"
        onMouseDown={(e) => handleMouseDown(e, "x")}
      />
      {/* Vertical resize handle */}
      <div
        className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize"
        onMouseDown={(e) => handleMouseDown(e, "y")}
      />
    </div>
  );
};

export default ResizablePreview;