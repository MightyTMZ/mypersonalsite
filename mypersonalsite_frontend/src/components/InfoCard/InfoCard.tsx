import React, { useState } from "react";

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
    <div className={`card-container${isFlipped ? ' is-flipped' : ''}`} onClick={handleFlip}>
      <div className="card h-100">
        <div className="card-front">
          <img src={icon} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <div className="card-back">
          <div className="card-body">
            <p className="card-text" style={{ fontSize: "0.8rem" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
