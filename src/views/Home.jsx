// Components
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';

// CSS
import '../styles/Home.css';
import rainyBg from "../background/rainy.gif"
import sunnyBg from "../background/mostlySunny.gif"
import snowBg from "../background/snow.gif"
import stormBg from "../background/thunderstorm.gif"
import cloudyBg from "../background/cloudy.gif"

// Librairies
import { useForm } from "react-hook-form";

// Composants react
import { useState, useEffect, useContext } from "react";

// CONTEXT
import {FavoriteContext} from '../App';

function Home() {

// State
const favoriteState = useContext(FavoriteContext);
  const [city, setCity] = useState(localStorage.getItem("savedCity"));
  const [weather, setWeather] = useState([]);

// Constante React hook form
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // Fonction ajout ville aux favoris :
  const getFavorite = () => {
    if (favoriteState.stockedCity.length < 3) {
      favoriteState.stockedCity.push(weather);
      console.log("FAVORITES", favoriteState.stockedCity[0][0].name)
    } else {
      console.log("ECHEC")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("savedCity") === null) {
      navigator.geolocation.getCurrentPosition((position) => {
    console.log(`latitude : ${position.coords.latitude} / longitude : ${position.coords.longitude}`);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=1e16d4d808acf38429a267a69416f852`
    )
      .then((res) => res.json())
      .then((res) => {

        setWeather([res]);
        setCity(res.name);

      });
  }, (error) => {
    console.error(error);
  });
    }
    
  }, [])


  // Fonction récupération ville input utilisateur :
  const getCity = () => {
    const value = getValues("location");
    setCity(value);
  };
  

  // Requête API météo en ComponentDidUpdate :
  useEffect(() => {

    if (city !== undefined && city !== null) {
      fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1e16d4d808acf38429a267a69416f852`
    )
      .then((res) => res.json())
      .then((res) => {

        setWeather([res]);
      });
    }
    
  }, [city]);

  // Background
  let background;
  if (weather.length !== 0) {
    if (weather[0].weather[0].main === 'Clouds') {
    background = cloudyBg;
  } else if (weather[0].weather[0].main === 'Rain') {
    background = rainyBg;
  } else if (weather[0].weather[0].main === 'Clear') {
    background = sunnyBg;
  } else if (weather[0].weather[0].main === 'Snow') {
    background = snowBg;
  } else if (weather[0].weather[0].main === 'Thunderstorm') {
    background = stormBg;
  }
  }

  const getStorage = () => {
    localStorage.setItem("savedCity", city);
  }
  
  const deleteStorage = () => {
    console.log("DELETE")
    localStorage.clear();
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
            placeholder="Enter a city"
          />
          {errors.location && <span>Please enter a valid location</span>}
          <button type="submit">Search</button>
        </form>
      </div>
      {/* GUARD Error */}
          {weather.length === 0 ? 
          (<p>Chargement...</p>
            ) : (

      // Component Card
      <Cards 
      image={background}
      cityName={city} 
      description={weather[0].weather[0].main} 
      // image={`http://openweathermap.org/img/w/${weather[0].weather[0].icon}.png`}
      temperature={weather[0].main.temp}
      humidity={weather[0].main.humidity}
      onClick={getFavorite}
      onStorage={getStorage}
      onDeleteStorage={deleteStorage}
      children="+"
      title='Add to favorite'
      />)}

      <Footer />
    </>
    
  );
  
}



export default Home;
