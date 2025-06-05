import { useState, useContext } from 'react';
import axios from 'axios';
import './Weather.css';
import { LogInContext } from '../App';

const Home = () => {
    const [data, setData] = useState([]);
    const [city, setCity] = useState("");

    const { userDetails } = useContext(LogInContext);

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleClick = () => {
        if(city){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5323ac1838d1d51e1fa2cc3916a48d4&units=metric`)
            .then((response) => {
                setData(prevData => [...prevData, response.data]);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });}
            else{
                alert("Please enter a city name")
            }
    };

    const handleDel = (ind) => {
        const updatedData = [...data];
        updatedData.splice(ind, 1);
        setData(updatedData);
    };
    const handleSync = (cityName) => {
        console.log("city name",cityName)
        const { Name, Email, Photo } = userDetails;
        const dataToPost = {
            displayName: Name,
            email: Email,
            photoURL: Photo,
            cityName: cityName
        }
        axios.post('https://667150e6e083e62ee43b0297.mockapi.io/demo', dataToPost)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
        <div className="mainarea">
        <div className='input-data'>
                &nbsp; &nbsp;
                {/* <span> Enter City :- </span> */}
                <input type="text" className='input' placeholder='Enter city' value={city} name="city" onChange={handleChange}
                    autoComplete='off' />
                &nbsp; &nbsp;
                <input type="button" value="search" className='btn' onClick={handleClick} />
                &nbsp; 
            </div>
            {data.map((cityData, i) => (
                <div key={i} className='box'>
                    <p><img src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`} alt='icon' /></p>
                    <h2>{cityData.main.temp_min}°C</h2>
                    <h4>{cityData.name}</h4>
                    <h5>{cityData.weather[0].description}</h5>
                    <div className='wind'>
                        <p>
                            <i className="fa-solid fa-cloud-sun-rain"></i> {cityData.main.humidity}%
                            <br />Humidity
                        </p>
                        <p>
                            <i className="fa-solid fa-wind"></i> {cityData.wind.speed}km/h
                            <br />Wind speed
                        </p>
                    </div>
                    <input type="button" value="X" className='del-btn' onClick={() => handleDel(i)} />
                    <input type="button" value="sync" className='sync-btn' onClick={() => handleSync(cityData.name)} />
                </div>
            ))}
        </div>
           
        </>
    );
};
export default Home;
