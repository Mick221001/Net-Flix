import NavBar from "../components/NavBar";
import React from "react";
import MovieSection from "../components/MovieSection";
import "../App.css"; // Import CSS file for styling

import recentMovies1 from "../assets/img/biancaneveFilmRec.jpg";
import recentMovies2 from "../assets/img/minecraftFilmRec.jpg"; 
import recentMovies3 from "../assets/img/rosaFilmRec.jpg";
import recentMovies4 from "../assets/img/conclaveFilmRec.jpg";
import recentMovies5 from "../assets/img/capAmericaFilmRec.jpeg";

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

const TopMovies =[
  {image: recentMovies1, title: "Biancaneve", description: "", url: ""},
  {image: recentMovies2, title: "Minecraft", description: "", url: ""},
  {image: recentMovies3, title: "Il ragazzo dai pantaloni ROSA", description: "", url: ""},
  {image: recentMovies4, title: "Conclave", description: "", url: ""},
  {image: recentMovies5, title: "Captain America, Brave new World", description: "", url: ""},
]

const recentMovies = [
  { image: comedy1, title: "Sonic 3", description: "Un viaggio esilarante.", url: "https://streamingcommunity.luxe/titles/10777-sonic-3-il-film" },
  { image: recentMovies1, title: "Biancaneve", description: "", url: ""},
  { image: recentMovies2, title: "Minecraft", description: "", url: ""},
  { image: action4, title: "Indiana Jones", description: "Rapido e emozionante.", url: "https://streamingcommunity.luxe/titles/6242-indiana-jones-e-il-quadrante-del-destino" },
  { image: recentMovies3, title: "Il ragazzo dai pantaloni ROSA", description: "", url: ""},
  { image: recentMovies4, title: "Conclave", description: "", url: ""},
  { image: recentMovies5, title: "Captain America, Brave new World", description: "", url: ""},
];

const actionMovies = [
  { image: action1, title: "Take Over", description: "Una avventura mozzafiato.", url: "https://streamingcommunity.luxe/titles/10882-take-cover-al-riparo" },
  { image: action2, title: "Back in Action", description: "Esplosivo e intenso.", url: "https://streamingcommunity.luxe/titles/11058-back-in-action" },
  { image: action3, title: "I Am Legend", description: "Azione senza sosta.", url: "https://streamingcommunity.luxe/titles/124-io-sono-leggenda" },
  { image: action4, title: "Indiana Jones", description: "Rapido e emozionante.", url: "https://streamingcommunity.luxe/titles/6242-indiana-jones-e-il-quadrante-del-destino" },
  { image: action5, title: "Terminator 2", description: "Adrenalina garantita.", url: "https://streamingcommunity.luxe/titles/1526-terminator" },
];

const comedyMovies = [
  { image: comedy1, title: "Sonic 3", description: "Un viaggio esilarante.", url: "https://streamingcommunity.luxe/titles/10777-sonic-3-il-film" },
  { image: comedy2, title: "AliG", description: "Risata dalla prima all'ultima scena.", url: "https://streamingcommunity.luxe/titles/10116-ali-g" },
  { image: comedy3, title: "Il Dittatore", description: "Divertente e intrattenente.", url: "https://streamingcommunity.luxe/titles/359-il-dittatore" },
  { image: comedy4, title: "The Love Guru", description: "Spiritoso e divertente.", url: "https://streamingcommunity.luxe/titles/11192-the-love-guru" },
  { image: comedy5, title: "Giovannona Coscialunga", description: "Un capolavoro comico.", url: "https://www.primevideo.com/region/eu/detail/0Q3BUGEWQPUFQVCWXLADVPLRXE/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B08VTYNN9L&qid=1743674632549" },
  { image: comedy6, title: "Step Brothers", description: "Un capolavoro comico.", url: "https://streamingcommunity.luxe/titles/10725-fratellastri-a-40-anni" },
  { image: comedy7, title: "Borat", description: "Un capolavoro comico.", url: "https://streamingcommunity.luxe/titles/5158-borat-studio-culturale-sullamerica-a-beneficio-della-gloriosa-nazione-del-kazakistan" },
];

const horrorMovies = [
  { image: horror1, title: "Annabelle 3", description: "Paura e Terrore.", url: "https://streamingcommunity.luxe/titles/825-annabelle-3" },
  { image: horror2, title: "It", description: "Mai fidarsi dei Clown.", url: "https://streamingcommunity.luxe/titles/11603-it-il-pagliaccio-assassino" },
  { image: horror3, title: "Spindeln", description: "Classico horror anni 50.", url: "https://www.youtube.com/watch?v=ub8hS2gy1Uc" },
  { image: horror4, title: "Noi", description: "Non fidarsi mai.", url: "https://streamingcommunity.luxe/titles/721-noi" },
  { image: horror5, title: "The Shining", description: "Un capolavoro horror.", url: "https://streamingcommunity.luxe/titles/337-shining" },
];


function Film(){
    return(
    <div>
      <NavBar />
      <h1>FILM</h1>
      <MovieSection title="⭐️Top Movies⭐️" movies={TopMovies} />
      <MovieSection title="🎬Recenti🎬" movies={recentMovies} />
      <MovieSection title="⚔️Azione⚔️" movies={actionMovies} />
      <MovieSection title="🎭Commedia🎭" movies={comedyMovies} />
      <MovieSection title="👻Horror👻" movies={horrorMovies} />
    </div>
    );
}

export default Film;