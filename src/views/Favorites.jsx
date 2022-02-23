import { useContext } from "react";
import { FavoriteContext } from "../App";
import Cards from "../components/Cards";

function Favorites() {
const favoriteState = useContext(FavoriteContext);
console.log("CITY", favoriteState.stockedCity[0])

  return (
  <>
  <h1>Favorites</h1>
  {favoriteState.stockedCity.map((city) => {
    return (
      <ul>
      <li>

      <Cards key={city[0].description} cityName={city[0].name} description={city[0].weather[0].description} humidity={city[0].main.humidity}/>
      </li>
    </ul>
    );
    
  })}

  </>
  );
}

export default Favorites;
