import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
var height=0;
var width =0;

function getWindowDimensions() {
  
  
    // Update the document title using the browser API
    width =window.innerWidth.width;
    height= window.innerHeight.height;

  
   
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
