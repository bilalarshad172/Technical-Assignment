import React from "react";
import Card from "../components/Card";
import frame from "../assets/Frame84.png";
import investment from "../assets/Investment.png";
import profile from "../assets/profile.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import Features from "./Features";
import Slider from "./Slider";
import RegisterForm from "./RegisterForm";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row pt-10">
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Lorem Ipsum{" "}
            <span className="text-[#46B0E6] heading-line">dolor</span> sit amet
            yo 👋
          </h1>
          <div className="space-y-4">
            <div className="w-full md:w-11/12">
              <Card
                name="Andrew Hamilton"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, ex?"
                image={profile}
              />
            </div>
            <div className="w-full md:w-11/12">
              <Card
                name="Andrew Schultz"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, ex?"
                image={profile1}
              />
            </div>
            <div className="w-full md:w-11/12">
              <Card
                name="Schultz Andrew"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, ex?"
                image={profile2}
              />
            </div>
            <div className="w-full md:w-11/12">
              <div className="w-full h-14 bg-gradient-to-b from-white to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={frame}
            alt="background-dots"
          />
          <img className="w-full h-auto" src={investment} alt="hero-image" />
        </div>
      </section>

      <div>
        <Features />
        <Slider />
        <RegisterForm />
      </div>
    </>
  );
};

export default Hero;
