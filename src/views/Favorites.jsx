import { useContext } from "react";
import { FavoriteContext } from "../App";
import Cards from "../components/Cards";

function Favorites() {
const favoriteState = useContext(FavoriteContext);
// console.log("CITY", favoriteState.stockedCity[0]);

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

      <Cards key={city[0].description} cityName={city[0].name} description={city[0].weather[0].description} humidity={city[0].main.humidity}/>
      <button onClick={() => removeFavorite(city)}>Remove favorite</button>
      </li>
    </ul>
    );
    
  })}

  </>
  );
}

export default Favorites;
