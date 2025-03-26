import React, { useState } from "react";
import "./MovieCards.css";

const CardFilm = ({ image, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`card-film ${hover ? "hover" : ""}`} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} className="film-image" />
      {hover && (
        <div className="film-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardFilm;
