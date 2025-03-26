import React, { useRef } from "react";
import "./MovieSection.css";
import CardFilm from "./MovieCards";

const MovieSection = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="movie-section">
      <h2 className="section-title">{title}</h2>
      <div className="movie-container-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="movie-container" ref={scrollRef}>
          {movies.map((movie, index) => (
            <CardFilm key={index} image={movie.image} title={movie.title} description={movie.description} />
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default MovieSection;