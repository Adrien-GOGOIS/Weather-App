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

  const getCity = () => {
    const value = getValues("location");
    favoriteState.setCity(value);
  };

  const getFavorite = () => {
    if (favoriteState.stockedCity.length <= 3 || !favoriteState.stockedCity.includes(favoriteState.city)) {
      favoriteState.stockedCity.push(favoriteState.weather);
    } 
  }


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
          {favoriteState.weather.length === 0 ? 
          (<p>Chargement...</p>
            ) : (
      <Cards cityName={favoriteState.weather[0].name} description={favoriteState.weather[0].weather[0].description} humidity={favoriteState.weather[0].main.humidity}/>)}
      <div>
        <button onClick={getFavorite}>Add to favorites</button>
      </div>
      
    </>
  );
}

export default Home;
