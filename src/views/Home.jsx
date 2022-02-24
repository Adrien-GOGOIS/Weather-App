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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be2cb14537f6eac7f6325a3421aa70e0`
    )
      .then((res) => res.json())
      .then((res) => {

        setWeather([res]);

      });
  }, [city]);

  return (
    <>
    {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
   
 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
 integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
 crossorigin=""></script> */}
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
        <button type="submit" onClick={getFavorite}>Add to favorites</button>
      </div>
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
