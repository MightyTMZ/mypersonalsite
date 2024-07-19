import React, { useState } from "react";
import "./InfoCard.css";
import "../../fonts/Poppins.css"

interface InfoCardProps {
  title: string;
  icon: string;
  description: string;
}


const InfoCard: React.FC<InfoCardProps> = ({ title, icon, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? "is-flipped" : ""}`}>
        <div className="card-front">
          <img
            src={icon}
            className="card-img-top"
            alt={title}
            style={{ height: "100px", width: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title poppins-bold">{title}</h5>
          </div>
        </div>
        <div className="card-back">
          <div className="card-body poppins">
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
