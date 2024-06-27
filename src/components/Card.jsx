import React from "react";


const Card = ({name, text, image, cardWidth, headingColor}) => {
  return (
    <div className="py-2">
      <div className={`${cardWidth} bg-white rounded-2xl flex`}>
        <div className="w-20%">
          <img className="p-4" src={image} alt="info" />
        </div>
              <div className="p-2">
                  <h6 className={`${headingColor} text-xl text-bold`}>{name}</h6>
                  <p>{text}</p>
              </div>
      </div>
    </div>
  );
};

export default Card;
