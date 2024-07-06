import React from "react";
import { useState, useEffect } from "react";
import "./DarkMode.css";

export const DarkMode = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggelTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    }else{
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div  className="hero-button themebtn">
      <label className="switch">
        <input onClick={() => toggelTheme()} type="checkbox"/>
        <span className="slider"></span>
      </label>
    </div>
  );
};
