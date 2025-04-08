import React, { useRef, useState, useEffect } from "react";
import "./MovieSection.css";
import CardFilm from "./MovieCards";

const MovieSection = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(5);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setCardsPerView(1);
      } else if (width <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(5);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    const newIndex =
      currentIndex === 0 ? movies.length - cardsPerView : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex =
      currentIndex >= movies.length - cardsPerView ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".movie-card");
      if (card) {
        const scrollAmount = index * (card.offsetWidth + 16); // 16px ≈ gap
        scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="movie-section">
      <h2 className="section-title">{title}</h2>
      <div className="movie-container-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="movie-container" ref={scrollRef}>
          {movies.map((movie, index) => (
            <CardFilm
              key={index}
              image={movie.image}
              title={movie.title}
              description={movie.description}
              url={movie.url}
            />
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MovieSection;
