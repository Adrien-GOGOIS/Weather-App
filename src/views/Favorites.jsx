// Composant context react
import { useContext } from "react";
import { FavoriteContext } from "../App";

// Component
import Cards from "../components/Cards";

// CSS
import '../styles/Home.css';
import rainyBg from "../background/rainy.gif"
import sunnyBg from "../background/mostlySunny.gif"
import snowBg from "../background/snow.gif"
import stormBg from "../background/thunderstorm.gif"
import cloudyBg from "../background/cloudy.gif"


// RENDER
function Favorites() {

  // Context
const favoriteState = useContext(FavoriteContext);
// console.log("CITY", favoriteState.stockedCity[0]);

// Fonction supression de favoris
const removeFavorite = (name) => {
  const index = favoriteState.stockedCity.indexOf(name);
  if (index > -1 ) {favoriteState.stockedCity.splice(index, 1)}
}

  return (
  <>
  <h1>Favorites</h1>
  {favoriteState.stockedCity.map((city) => {

// Background
let background;
if (city.length !== 0) {
if (city[0].weather[0].main === 'Clouds') {
  background = cloudyBg;
} else if (city[0].weather[0].main === 'Rain') {
  background = rainyBg;
} else if (city[0].weather[0].main === 'Clear') {
  background = sunnyBg;
} else if (city[0].weather[0].main === 'Snow') {
  background = snowBg;
} else if (city[0].weather[0].main === 'Thunderstorm') {
  background = stormBg;
}
}

const getStorage = () => {
  localStorage.setItem("savedCity", city[0].name)
}

    return (
      <ul>
      <li>
      {/* Composant Card et passage de props */}
      <Cards key={city[0].description} 
      cityName={city[0].name} 
      description={city[0].weather[0].main} 
      temperature={city[0].main.temp}
      humidity={city[0].main.humidity} 
      onClick={() => removeFavorite(city)}
      onStorage={getStorage}
      children="-"
      title='Remove favorite'
      image={background}
      />
     
      </li>
    </ul>
    );
    
  })}

  </>
  );
}

export default Favorites;
