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
  const [stockage, setStockage] = useState([]);

  const getCity = () => {
    const value = getValues("location");
    setCity(value);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=be2cb14537f6eac7f6325a3421aa70e0`
    )
      .then((res) => res.json())
      .then((res) => {
        // setStockage(res);
        console.log("res", res);
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
        <p>{city}</p>
        <p>{stockage.weather}</p>
      </div>
    </>
  );
}

export default Home;
