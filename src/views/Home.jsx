// Librairies
import { useForm } from "react-hook-form";

import { useState, useEffect } from "react";

function Home() {
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

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be2cb14537f6eac7f6325a3421aa70e0`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("RES", res.weather)
        setWeather([res]);
        console.log("WEATHER", weather[0].weather[0].description)
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
          <li>{weather[0].weather[0].description}</li>
          <li>Humidity : {weather[0].main.humidity}%</li>
        </ul>
  
        
      </div>
    </>
  );
}

export default Home;
