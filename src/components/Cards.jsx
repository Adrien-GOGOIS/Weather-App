export default function Cards(props) {
    return (
        <div>
            <p>{props.description}</p>
            <p>Humidity : {props.humidity}%</p>
        </div>
    );
    
}