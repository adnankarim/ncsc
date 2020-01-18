import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function getWindowDimensions() {
  
  useEffect(() => {
    // Update the document title using the browser API
    const { innerWidth: width, innerHeight: height } = window;
  });
  var width =width;
  var height= height;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
