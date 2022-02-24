// Composant context react
import { useContext } from "react";
import { FavoriteContext } from "../App";

// Component
import Cards from "../components/Cards";

// CSS
import '../styles/Home.css';

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
      children="-"
      title='Remove favorite'
      image={`http://openweathermap.org/img/w/${city[0].weather[0].icon}.png`}
      />
     
      </li>
    </ul>
    );
    
  })}

  </>
  );
}

export default Favorites;
