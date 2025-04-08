import NavBar from "../components/NavBar";
import "../App.css"; // Import CSS file for styling
import Footer from "../components/Footer";

import recentMovies1 from "../assets/img/biancaneveFilmRec.jpg";
import recentMovies2 from "../assets/img/minecraftFilmRec.jpg"; 
import recentMovies3 from "../assets/img/rosaFilmRec.jpg";
import recentMovies4 from "../assets/img/conclaveFilmRec.jpg";
import recentMovies5 from "../assets/img/capAmericaFilmRec.jpeg";
import recentMovies6 from "../assets/img/mickey17Film.png";
import recentMovies7 from "../assets/img/AnoraFilm.jpg";

import recentSeries1 from "../assets/img/adolescenceSerieTV.jpg";
import recentSeries2 from "../assets/img/ilGattopardoSerieTV.jpg";
import recentSeries3 from "../assets/img/ilCamorristaSerieTV.png";
import recentSeries4 from "../assets/img/divorzioSerieTV.jpg";
import recentSeries5 from "../assets/img/sconfortSerieTV.avif";
import recentSeries6 from "../assets/img/nuovaScenaSerieTV.jpg";
import recentSeries7 from "../assets/img/GialappashowSerieTV.jpg";
import MovieSection from "../components/MovieSection";

const recentMovies = [
  {image: recentMovies1, title: "Biancaneve", description: "", url: ""},
  {image: recentMovies2, title: "Minecraft", description: "", url: ""},
  {image: recentMovies3, title: "Il ragazzo dai pantaloni ROSA", description: "", url: ""},
  {image: recentMovies4, title: "Conclave", description: "", url: ""},
  {image: recentMovies5, title: "Captain America, Brave new World", description: "", url: ""},
  {image: recentMovies6, title: "Mickey17", description: "", url: ""},
  {image: recentMovies7, title: "Anora", description: "", url: ""},
];

const recentSeries = [
  {image: recentSeries1, title: "Adolescence", description: "", url: ""},
  {image: recentSeries2, title: "Il Gattopardo", description: "", url: ""},
  {image: recentSeries3, title: "Il Camorrista", description: "", url: ""},
  {image: recentSeries4, title: "Come assicurarsi il divorzio", description: "", url: ""},
  {image: recentSeries5, title: "Sconfort Zone", description: "", url: ""},
  {image: recentSeries6, title: "Nuova Scena", description: "", url: "https://streamingcommunity.luxe/titles/7544-nuova-scena"},
  {image: recentSeries7, title: "Gialappa's Show", description: "", url: ""},
];

function Recenti(){
    return(
        <>
            <NavBar></NavBar>
            <h1>Recenti</h1>
            <MovieSection title="🎬Film Recenti🎬" movies={recentMovies} />
            <MovieSection title="📺Serie TV Recenti📺" movies={recentSeries} />
            <Footer></Footer>
        </>
    );
}

export default Recenti;