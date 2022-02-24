import '../styles/Home.css';

export default function Cards(props) {

    return (
        <div className='cards' 
        // style={{backgroundImage: `url(${props.image})`, 
        // backgroundRepeat: 'no-repeat', 
        // backgroundSize: '500px'}}
        >
            <p id='cityName'>{props.cityName}</p>
            <p><span className='descriptionTitle'>Weather</span> : <span className='actualWeather'>{props.description}</span></p>
            <p><span className='descriptionTitle'>Temperature</span> : <span className='actualWeather'>{Math.round(props.temperature)}°C</span></p>
            <img src={props.image} alt="Weather icon" />
            <p><span className='descriptionTitle'>Humidity</span> : <span className='actualWeather'>{props.humidity}%</span></p>
            <button type="submit" className="favoriteButton" onClick={props.onClick}><span id='buttonText'>{props.children}</span></button>
        </div>
    ); 
}

// const StyleCard = styled.div`
//     border: solid 1px black
// `