import React, { useState } from "react";
import "./MovieCards.css";

const MovieCards = ({ image, title, description, url }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className={`movie-card ${hover ? "hover" : ""}`} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} className="movie-image" />
      {hover && (
        <div className="movie-info">
          {url ? (
            <h3>
              <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </h3>
          ) : (
            <h3>{title}</h3>
          )}
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCards;
