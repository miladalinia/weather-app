import React, {useState} from "react"
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeatherAction} from "./features/weatherSlice";

const App = () => {
    const [city, setCity] = useState("")
    const dispatch = useDispatch();
    const {weather} = useSelector((state) => state.weather);
    // useEffect(() => {
    //     console.log("weather:",weather)
    // }, [weather])

    const dateBuilder = d => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

    return (
        <div className={
            (typeof weather?.main != "undefined")
                ? ((weather?.main.temp > 16)
                    ? 'app warm'
                    : 'app')
                : 'app'}>
            <main>
                <div className="search-box
                ">
                    <input
                        value={city}
                        type="text"
                        className="search-bar"
                        placeholder="Search City..."
                        onChange={(e) => setCity(e.target.value)}
                        onKeyPress={(e) => (e.key === "Enter") ? dispatch(fetchWeatherAction(city)) : ''}
                    />
                </div>
                {(typeof weather?.main != "undefined") ? (
                    <div className="location-box">
                        <div className="location">{weather?.name},{weather?.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                ) : ('')}

                {(typeof weather?.main != "undefined") ? (

                    <div className="weather-box">
                        <div className="temp">{Math.round(weather?.main.temp)}&#8451;</div>
                        <div className="weather">{weather?.weather[0].main}</div>
                    </div>
                ) : ('')}

            </main>
        </div>
    );
};

export default App;