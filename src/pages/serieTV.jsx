import NavBar from "../components/NavBar";
import "../App.css"; // Import CSS file for styling
import Footer from "../components/Footer";

import recentSeries1 from "../assets/img/adolescenceSerieTV.jpg";
import recentSeries2 from "../assets/img/ilGattopardoSerieTV.jpg";
import recentSeries3 from "../assets/img/ilCamorristaSerieTV.png";
import recentSeries4 from "../assets/img/divorzioSerieTV.jpg";
import recentSeries5 from "../assets/img/sconfortSerieTV.avif";
import recentSeries6 from "../assets/img/nuovaScenaSerieTV.jpg";
import recentSeries7 from "../assets/img/GialappashowSerieTV.jpg";
import MovieSection from "../components/MovieSection";


const TopSeries =[
  {image: recentSeries5, title: "Sconfort Zone", description: "", url: ""},
  {image: recentSeries4, title: "Come assicurarsi il divorzio", description: "", url: ""},
  {image: recentSeries2, title: "Il Gattopardo", description: "", url: ""},
  {image: recentSeries3, title: "Il Camorrista", description: "", url: ""},
  {image: recentSeries1, title: "Adolescence", description: "", url: ""},
  {image: recentSeries6, title: "Nuova Scena", description: "", url: ""},
  {image: recentSeries7, title: "Gialappa's Show", description: "", url: ""},
]

const recentSeries = [
  {image: recentSeries1, title: "Adolescence", description: "", url: ""},
  {image: recentSeries2, title: "Il Gattopardo", description: "", url: ""},
  {image: recentSeries3, title: "Il Camorrista", description: "", url: ""},
  {image: recentSeries4, title: "Come assicurarsi il divorzio", description: "", url: ""},
  {image: recentSeries5, title: "Sconfort Zone", description: "", url: ""},
  {image: recentSeries6, title: "Nuova Scena", description: "", url: "https://streamingcommunity.luxe/titles/7544-nuova-scena"},
  {image: recentSeries7, title: "Gialappa's Show", description: "", url: ""},
];

function SerieTV(){
    return(
        <>
            <NavBar></NavBar>
            <h1>Serie TV</h1>
            <MovieSection title="⭐️Top Series⭐️" movies={TopSeries} />
            <MovieSection title="📺Serie TV Recenti📺" movies={recentSeries} />
            <Footer></Footer>
        </>
    );
}

export default SerieTV;