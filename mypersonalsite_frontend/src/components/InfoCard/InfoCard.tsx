import React from "react";

interface InfoCardProps {
  title: string;
  icon: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, description }) => {
  return (
    <div className="card h-100">
      <img src={icon} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
