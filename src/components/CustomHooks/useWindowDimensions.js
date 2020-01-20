import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
var height=0;
var width =0;

function usegetWindowDimensions() {
  
  
    // Update the document title using the browser API
    

  
   
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    usegetWindowDimensions()
  );
  useEffect(()=>{
    width =window.innerWidth.width;
    height= window.innerHeight.height;
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(usegetWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
