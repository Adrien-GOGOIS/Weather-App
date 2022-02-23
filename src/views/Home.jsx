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
    if (favoriteState.stockedCity.length <= 3 || !favoriteState.stockedCity.includes(city)) {
      favoriteState.stockedCity.push(city);
    } else {
     
        return (
          <p>You already saved 3 favorites city, please remove one before...</p>
        );
      
    }
    
    console.log("FAVORITES", favoriteState.stockedCity)
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
      <div>
        <ul>
          <li>{city}</li>
          {weather.length === 0 ? (<p>Chargement...</p>) : (
            <>
            <li>{weather[0].weather[0].description}</li>
          <li>Humidity : {weather[0].main.humidity}%</li>
            </>
            
          )}
          
        </ul>
  
      <div>
        <button onClick={getFavorite}>Add to favorites</button>
      </div>
      </div>
    </>
  );
}

export default Home;
