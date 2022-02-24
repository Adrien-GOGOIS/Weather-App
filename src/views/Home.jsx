import Cards from '../components/Cards.jsx';

import '../styles/Home.css';

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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=be2cb14537f6eac7f6325a3421aa70e0`
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
      <Cards 
      cityName={weather[0].name} 
      description={weather[0].weather[0].main} 
      image={`http://openweathermap.org/img/w/${weather[0].weather[0].icon}.png`}
      temperature={weather[0].main.temp}
      humidity={weather[0].main.humidity}
      onClick={getFavorite}
      children="+"
      />)}
      
      <div id="map" style={{height: '180px'}}>
      </div>

      
    </>
    
  );
  
}


// {
//   let map = L.map('map');

//   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);

// map.setView
// }

export default Home;
