import React from "react";
import { useState, useEffect } from "react";
import { DarkMode } from "../Mode/DarkMode";

const HeroSection = () => {

  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/image/amazon.png" alt="amazon-logo"></img>
            <img src="/image/flipkart.png" alt="flipkart-logo"></img>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/image/shoe_image.png" alt="" />
      </div>
      <DarkMode></DarkMode>
    </main>
  );
};

export default HeroSection;
