import React from "react";
import MovieSection from "../components/MovieSection";
import NavBar from "../components/NavBar";
import "../App.css"; // Import CSS file for styling

import action1 from "../assets/img/TakeCover.jpg";
import action2 from "../assets/img/back_in_action.jpg";
import action3 from "../assets/img/iAmLegend.jpg";
import action4 from "../assets/img/indiana.jpg";
import action5 from "../assets/img/terminator2.jpg";

import comedy1 from "../assets/img/Sonic3.jpg";
import comedy2 from "../assets/img/AliG.jpg";
import comedy3 from "../assets/img/IlDittatore.jpg";
import comedy4 from "../assets/img/TheLoveGuru.jpg";
import comedy5 from "../assets/img/GiovannonaCoscialunga.jpg";
import comedy6 from "../assets/img/stepBrothers.jpg";
import comedy7 from "../assets/img/borat.jpg";

import horror1 from "../assets/img/annabel.jpg";
import horror2 from "../assets/img/it.jpg";
import horror3 from "../assets/img/spindeln.jpg";
import horror4 from "../assets/img/noi.jpg";
import horror5 from "../assets/img/theShining.jpg";

const actionMovies = [
  { image: action1, title: "Take Over", description: "Una avventura mozzafiato.", url: "#" },
  { image: action2, title: "Back in Action", description: "Esplosivo e intenso.", url: "#" },
  { image: action3, title: "I Am Legend", description: "Azione senza sosta.", url: "#" },
  { image: action4, title: "Indiana Jones", description: "Rapido e emozionante.", url: "#" },
  { image: action5, title: "Terminator 2", description: "Adrenalina garantita.", url: "#" },
];

const comedyMovies = [
  { image: comedy1, title: "Sonic 3", description: "Un viaggio esilarante.", url: "#" },
  { image: comedy2, title: "AliG", description: "Risata dalla prima all'ultima scena.", url: "#" },
  { image: comedy3, title: "Il Dittatore", description: "Divertente e intrattenente.", url: "#" },
  { image: comedy4, title: "The Love Guru", description: "Spiritoso e divertente.", url: "#" },
  { image: comedy5, title: "Giovannona Coscialunga", description: "Un capolavoro comico.", url: "#" },
  { image: comedy6, title: "Step Brothers", description: "Un capolavoro comico.", url: "#" },
  { image: comedy7, title: "Borat", description: "Un capolavoro comico.", url: "#" },
];

const horrorMovies = [
  { image: horror1, title: "Annabelle 3", description: "Paura e Terrore.", url: "#" },
  { image: horror2, title: "It", description: "Mai fidarsi dei Clown.", url: "#" },
  { image: horror3, title: "Spindeln", description: "Classico horror anni 50.", url: "#" },
  { image: horror4, title: "Noi", description: "Non fidarsi mai.", url: "#" },
  { image: horror5, title: "The Shining", description: "Un capolavoro horror.", url: "#" },
];

function Home() {
  return (
    <div>
      <NavBar />
      <MovieSection title="Azione" movies={actionMovies} />
      <MovieSection title="Commedia" movies={comedyMovies} />
      <MovieSection title="Horror" movies={horrorMovies} />
    </div>
  );
}

export default Home;
