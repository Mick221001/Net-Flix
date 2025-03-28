import React from "react";
import NavBar from "./components/NavBar";
import MovieSection from "./components/MovieSection";
import "./components/MovieCards";
import "./App.css";

import action1 from "./assets/img/TakeCover.jpg";
import action2 from "./assets/img/back_in_action.jpg";
import action3 from "./assets/img/iAmLegend.jpg";
import action4 from "./assets/img/indiana.jpg";
import action5 from "./assets/img/terminator2.jpg";

import comedy1 from "./assets/img/Sonic3.jpg";
import comedy2 from "./assets/img/AliG.jpg";
import comedy3 from "./assets/img/IlDittatore.jpg";
import comedy4 from "./assets/img/TheLoveGuru.jpg";
import comedy5 from "./assets/img/GiovannonaCoscialunga.jpg";
import comedy6 from "./assets/img/stepBrothers.jpg";
import comedy7 from "./assets/img/borat.jpg";

import horror1 from "./assets/img/annabel.jpg";
import horror2 from "./assets/img/it.jpg";
import horror3 from "./assets/img/spindeln.jpg";
import horror4 from "./assets/img/noi.jpg";
import horror5 from "./assets/img/theShining.jpg";

const actionMovies = [
  { image: action1, title: "Take Over", description: "Una avventura mozzafiato.", url: "https://streamingcommunity.hiphop/titles/10882-take-cover-al-riparo" },
  { image: action2, title: "Back in Action", description: "Esplosivo e intenso.", url: "https://streamingcommunity.hiphop/titles/11058-back-in-action"},
  { image: action3, title: "I Am Legend", description: "Azione senza sosta.", url: "https://streamingcommunity.hiphop/titles/124-io-sono-leggenda" },
  { image: action4, title: "Indiana Jones", description: "Rapido e emozionante.", url: "https://streamingcommunity.hiphop/titles/6242-indiana-jones-e-il-quadrante-del-destino" },
  { image: action5, title: "Terminator 2", description: "Adrenalina garantita.", url: "https://streamingcommunity.hiphop/titles/1526-terminator"}
];

const comedyMovies = [
  { image: comedy1, title: "Sonic 3", description: "Un viaggio esilarante." , url: "https://streamingcommunity.hiphop/titles/10777-sonic-3-il-film"},
  { image: comedy2, title: "AliG", description: "Risata dalla prima all'ultima scena." , url:"https://streamingcommunity.hiphop/titles/10116-ali-g"},
  { image: comedy3, title: "Il Dittatore", description: "Divertente e intrattenente." , url:"https://streamingcommunity.hiphop/titles/359-il-dittatore"},
  { image: comedy4, title: "The Love Guru", description: "Spiritoso e divertente.", url: "https://streamingcommunity.hiphop/titles/11192-the-love-guru" },
  { image: comedy5, title: "Giovannona Coscialounga", description: "Un capolavoro comico.", url:"https://www.primevideo.com/dp/amzn1.dv.gti.b8bbb4d2-a05a-2b3e-8641-f8a9d3a565a2?autoplay=0&ref_=atv_cf_strg_wb"},
  { image: comedy6, title: "Step Brothers", description: "Un capolavoro comico." , url: "https://streamingcommunity.hiphop/titles/10725-fratellastri-a-40-anni"},
  { image: comedy7, title: "Borat", description: "Un capolavoro comico." , url: "https://streamingcommunity.hiphop/titles/5158-borat-studio-culturale-sullamerica-a-beneficio-della-gloriosa-nazione-del-kazakistan"}
];

const horrorMovies = [
  { image: horror1, title: "Annabelle 3", description: "Paura e Terrore." , url: "https://streamingcommunity.hiphop/titles/825-annabelle-3"},
  { image: horror2, title: "It", description: "Mai fidarsi dei Clown." , url: "https://streamingcommunity.hiphop/titles/11603-it-il-pagliaccio-assassino"},
  { image: horror3, title: "Spindeln", description: "Classico horor anni 50." , url: "https://www.youtube.com/watch?v=Q04kQo2bSe4"},
  { image: horror4, title: "Noi", description: "Non fidarsi mai." , url:"https://streamingcommunity.hiphop/titles/721-noi"},
  { image: horror5, title: "The Shining", description: "Un capolavoro horror." , url:"https://streamingcommunity.hiphop/titles/337-shining"},
];

function App() {
  return (
    <div className="app">
      <NavBar />
      <MovieSection title="Azione" movies={actionMovies} />
      <MovieSection title="Commedia" movies={comedyMovies} />
      <MovieSection title="Horror" movies={horrorMovies} />
    </div>
  );
}

export default App;
