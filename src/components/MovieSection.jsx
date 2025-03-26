import React, { useRef, useState } from "react";
import "./MovieSection.css";
import CardFilm from "./MovieCards";

const MovieSection = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const cardWidth = 200;  // Imposta la larghezza di ogni card (modifica se necessario)
  const cardGap = 10;  // Spazio tra le card
  const cardsVisible = 5;  // Numero di card visibili contemporaneamente
  const scrollAmount = cardWidth + cardGap; // La distanza che verrà percorsa ad ogni scroll

  // Stato per tenere traccia della posizione corrente
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (currentIndex < movies.length - cardsVisible) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Limita le card a quelle visibili
  const visibleMovies = movies.slice(currentIndex, currentIndex + cardsVisible);

  return (
    <div className="movie-section">
      <h2 className="section-title">{title}</h2>
      <div className="movie-container-wrapper">
        <button className="scroll-button left" onClick={scrollLeft} disabled={currentIndex === 0}>&lt;</button>
        <div className="movie-container" ref={scrollRef} style={{ width: `${cardWidth * cardsVisible + cardGap * (cardsVisible - 1)}px` }}>
          {visibleMovies.map((movie, index) => (
            <CardFilm key={index} image={movie.image} title={movie.title} description={movie.description} url={movie.url} />
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight} disabled={currentIndex >= movies.length - cardsVisible}>&gt;</button>
      </div>
    </div>
  );
};

export default MovieSection;