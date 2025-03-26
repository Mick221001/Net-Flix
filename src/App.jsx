import React from "react";
import NavBar from "./components/NavBar";
import MovieSection from "./components/MovieSection";
import "./components/MovieCards"
import "./App.css";

const App = () => {
  const actionMovies = [
    { image: "action1.jpg", title: "Action Movie 1", description: "A thrilling adventure." },
    { image: "action2.jpg", title: "Action Movie 2", description: "Explosive and intense." },
    { image: "action3.jpg", title: "Action Movie 3", description: "Non-stop action." },
    { image: "action4.jpg", title: "Action Movie 4", description: "Fast-paced and exciting." },
    { image: "action5.jpg", title: "Action Movie 5", description: "Adrenaline rush guaranteed." }
  ];

  const comedyMovies = [
    { image: "comedy1.jpg", title: "Comedy Movie 1", description: "A hilarious journey." },
    { image: "comedy2.jpg", title: "Comedy Movie 2", description: "Laughs from start to finish." },
    { image: "comedy3.jpg", title: "Comedy Movie 3", description: "Fun and entertaining." },
    { image: "comedy4.jpg", title: "Comedy Movie 4", description: "Witty and amusing." },
    { image: "comedy5.jpg", title: "Comedy Movie 5", description: "A comedic masterpiece." }
  ];

  return (
    <div className="app">
      <NavBar />
      <MovieSection title="Azione" movies={actionMovies} />
      <MovieSection title="Commedia" movies={comedyMovies} />
    </div>
  );
};

export default App;