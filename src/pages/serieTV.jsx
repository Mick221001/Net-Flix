import NavBar from "../components/NavBar";

import recentSeries1 from "../assets/img/adolescenceSerieTV.jpg";
import recentSeries2 from "../assets/img/ilGattopardoSerieTV.jpg";
import recentSeries3 from "../assets/img/ilCamorristaSerieTV.png";
import recentSeries4 from "../assets/img/divorzioSerieTV.jpg";
import recentSeries5 from "../assets/img/sconfortSerieTV.avif";
import MovieSection from "../components/MovieSection";

const recentSeries = [
  {image: recentSeries1, title: "Adolescence", description: "", url: ""},
  {image: recentSeries2, title: "Il Gattopardo", description: "", url: ""},
  {image: recentSeries3, title: "Il Camorrista", description: "", url: ""},
  {image: recentSeries4, title: "Come assicurarsi il divorzio", description: "", url: ""},
  {image: recentSeries5, title: "Sconfort Zone", description: "", url: ""},
];

function SerieTV(){
    return(
        <>
            <NavBar></NavBar>
            <h1>Serie TV</h1>
            <MovieSection title="📺Serie TV Recenti📺" movies={recentSeries} />
        </>
    );
}

export default SerieTV;