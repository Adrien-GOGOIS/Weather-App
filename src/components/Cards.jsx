// CSS
import '../styles/Home.css';

export default function Cards(props) {

    return (
        <div className='cards' 
        style={{backgroundImage: `url(${props.image})`,
    backgroundSize: '300px', backgroundRepeat: 'no-repeat', backgroundPosition: '0% 50%'}}
        
        >
            <p id='cityName'>{props.cityName}</p>
            <p><span className='descriptionTitle'>Weather</span> : <span className='actualWeather'>{props.description}</span></p>
            <p><span className='descriptionTitle'>Temperature</span> : <span className='actualWeather'>{Math.round(props.temperature)}°C</span></p>
            {/* <img src={props.image} alt="Weather icon" /> */}
            <p><span className='descriptionTitle'>Humidity</span> : <span className='actualWeather'>{props.humidity}%</span></p>
            <button title={props.title} type="submit" className="favoriteButton" onClick={props.onClick}><span>{props.children}</span></button>
            <button title="Save city" type="submit" className="storageButton" onClick={props.onStorage}><span>&hearts;</span></button>
            <button title="Delete saved city" type="submit" className="deleteButton" onClick={props.onDeleteStorage}><span className='redX'></span></button>
        </div>
    ); 
}

// const StyleCard = styled.div`
//     border: solid 1px black
// `