import { useContext, useEffect } from "react";
import { FavoriteContext } from "../App";

export default function Cards(props) {
    const favoriteState = useContext(FavoriteContext);



    useEffect(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${favoriteState.city}&appid=be2cb14537f6eac7f6325a3421aa70e0`
        )
          .then((res) => res.json())
          .then((res) => {
    
            favoriteState.setWeather([res]);
    
          });
      }, [favoriteState.city]);

    return (
        <div>
            <p>{props.cityName}</p>
            <p>{props.description}</p>
            <p>Humidity : {props.humidity}%</p>
        </div>
    ); 
}