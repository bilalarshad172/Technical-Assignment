import React from "react";
import Card from "./Card";
import bars from "../assets/bars.png";
import trophy from "../assets/trophy.png";
import image from "../assets/img.png";

const Features = () => {
  return (
    <>
      <div className="bg-white mt-10 md:mt-20 py-6 flex flex-col md:flex-row md:space-x-6 rounded-lg">
        <div className="mb-4 md:mb-0">
          <Card
            name="24/7 Support"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            image={image}
            headingColor={"text-[#F89D21]"}
          />
        </div>
        <div className="mb-4 md:mb-0">
          <Card
            name="1000+ of Reviews"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            image={bars}
            headingColor={"text-[#F89D21]"}
          />
        </div>
        <div>
          <Card
            name="And more"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            image={trophy}
            headingColor={"text-[#F89D21]"}
          />
        </div>
      </div>
    </>
  );
};

export default Features;
