import React, { useEffect, useState } from "react";

function DuringCourse() {
  const [isColor, setIsColor] = useState("error");

  useEffect(() => {
    setIsColor(localStorage.getItem("Color_Circle"))
  }, []);

  const handleToggle = () => {
    setIsColor(isColor === "error" ? "success" : "error");
  };
 
  useEffect(()=>{
    localStorage.setItem("Color_Circle",isColor)
  },[isColor])
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <div  style={{ backgroundColor: isColor==="error"?"red":"green", borderRadius: "50%" , width:50 , height:50 }}></div>
    </div>
  );
}

export default DuringCourse;
