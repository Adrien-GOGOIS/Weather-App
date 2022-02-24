import '../styles/Home.css';

export default function Cards(props) {

    return (
        <div className='cards'>
            <p>{props.cityName}</p>
            <p>{props.description}</p>
            <img src={props.image} alt="" />
            <p>Humidity : {props.humidity}%</p>
            <button type="submit" className="favoriteButton" onClick={props.onClick}>{props.children}</button>
        </div>
    ); 
}

// const StyleCard = styled.div`
//     border: solid 1px black
// `