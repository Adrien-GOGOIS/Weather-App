import '../styles/Home.css';

export default function Cards(props) {

    return (
        <div className='cards'>
            <p>{props.cityName}</p>
            <p>Weather : {props.description}</p>
            <p>Temperature : {Math.round(props.temperature)}°C</p>
            <img src={props.image} alt="Weather icon" />
            <p>Humidity : {props.humidity}%</p>
            <button type="submit" className="favoriteButton" onClick={props.onClick}>{props.children}</button>
        </div>
    ); 
}

// const StyleCard = styled.div`
//     border: solid 1px black
// `