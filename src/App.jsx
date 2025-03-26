import React from "react";
import NavBar from "./components/NavBar";
import MovieSection from "./components/MovieSection";
import "./components/MovieCards";
import "./App.css";

import action1 from "./assets/img/takeCover.jpg";
import action2 from "./assets/img/back_in_action.jpg";
import action3 from "./assets/img/i_am_legend.jpg";
import action4 from "./assets/img/indiana.jpg";
import action5 from "./assets/img/terminator2.jpg";

import comedy1 from "./assets/img/Sonic3.jpg";
import comedy2 from "./assets/img/AliG.jpg";
import comedy3 from "./assets/img/IlDittatore.jpg";
import comedy4 from "./assets/img/TheLoveGuru.jpg";
import comedy5 from "./assets/img/GiovannonaCoscialunga.jpg";
import comedy6 from "./assets/img/stepBrothers.jpg";
import comedy7 from "./assets/img/borat.jpg";

const actionMovies = [
  { image: action1, title: "Film d'azione 1", description: "Una avventura mozzafiato." },
  { image: action2, title: "Film d'azione 2", description: "Esplosivo e intenso." },
  { image: action3, title: "Film d'azione 3", description: "Azione senza sosta." },
  { image: action4, title: "Film d'azione 4", description: "Rapido e emozionante." },
  { image: action5, title: "Film d'azione 5", description: "Adrenalina garantita." }
];

const comedyMovies = [
  { image: comedy1, title: "Film Comico 1", description: "Un viaggio esilarante." },
  { image: comedy2, title: "Film Comico 2", description: "Risa dalla prima all'ultima scena." },
  { image: comedy3, title: "Film Comico 3", description: "Divertente e intrattenente." },
  { image: comedy4, title: "Film Comico 4", description: "Spiritoso e divertente.", url: "https://streamingcommunity.hiphop/titles/11192-the-love-guru" },
  { image: comedy5, title: "Film Comico 5", description: "Un capolavoro comico." },
  { image: comedy6, title: "Film Comico 6", description: "Un capolavoro comico." },
  { image: comedy7, title: "Film Comico 7", description: "Un capolavoro comico." }
];

function App() {
  return (
    <div className="app">
      <NavBar />
      <MovieSection title="Azione" movies={actionMovies} />
      <MovieSection title="Commedia" movies={comedyMovies} />
    </div>
  );
}

export default App;
