import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../assets/1920x750.jpg";
// import banner2 from "../assets/1920x920.jpg";

function HeroCarousel() {
  return (
    <div className="min-h-screen w-full">
      <img src={banner1} className="w-full" />
    </div>
  );
}

export default HeroCarousel;
