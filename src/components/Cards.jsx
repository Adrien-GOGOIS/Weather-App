import '../styles/Home.css';

export default function Cards(props) {

    return (
        <div className='cards'>
            <p>{props.cityName}</p>
            <p>{props.description}</p>
            <p>Humidity : {props.humidity}%</p>
        </div>
    ); 
}

// const StyleCard = styled.div`
//     border: solid 1px black
// `