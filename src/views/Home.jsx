import Cards from '../components/Cards.jsx';

// Librairies
import { useForm } from "react-hook-form";

import { useState, useEffect, useContext } from "react";

import {FavoriteContext} from '../App';

function Home() {
const favoriteState = useContext(FavoriteContext);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState([]);

  const getCity = () => {
    const value = getValues("location");
    setCity(value);
  };

  const getFavorite = () => {
    if (favoriteState.stockedCity.length < 3) {
      favoriteState.stockedCity.push(weather);
      console.log("FAVORITES", favoriteState.stockedCity[0][0].name)
    } else {
      console.log("ECHEC")
    }
    
    
  }


  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be2cb14537f6eac7f6325a3421aa70e0`
    )
      .then((res) => res.json())
      .then((res) => {

        setWeather([res]);

      });
  }, [city]);

  return (
    <>
      <div>
        {/* Fonction soumission formulaire : */}
        <form onSubmit={handleSubmit(getCity)}>
          <input
            {...register("location", { required: true })}
            type="text"
            name="location"
            id="location"
            placeholder="location"
            //   value={localStorage.getItem("location")}
          />
          {errors.location && <span>Please enter a valid location</span>}
          <button type="submit">Search</button>
        </form>
      </div>
          {weather.length === 0 ? 
          (<p>Chargement...</p>
            ) : (
      <Cards cityName={weather[0].name} description={weather[0].weather[0].description} humidity={weather[0].main.humidity}/>)}
      <div>
        <button onClick={getFavorite}>Add to favorites</button>
      </div>
      
    </>
  );
}

export default Home;
