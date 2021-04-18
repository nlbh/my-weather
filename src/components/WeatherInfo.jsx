import './Weather.css';
import React from 'react';
import _ from 'lodash';

const WeatherInfo = ({ currentWeather = {} }) => {
    // ============================================
    // RENDER
    // ============================================

    return (
        !_.isEmpty(currentWeather) && (
            <div className="weather-info">
                <div className="weather-info__container">
                    <label className="weather-info__title">{`${currentWeather.city}, ${currentWeather.country}`}</label>
                    <div className="weather-info__img-container">
                        <img
                            src={`http://openweathermap.org/img/wn/${currentWeather.weather.icon}@2x.png`}
                            alt=""
                            className="weather-info__img"
                        />
                        <div className="weather-info__img-text">
                            <label>{currentWeather.weather.main}</label>
                        </div>
                    </div>
                    <div className="weather-info__detail-container">
                        <div className="weather-info__col-1">
                            <label>Description :</label>
                        </div>
                        <div>
                            <label>{currentWeather.weather.description}</label>
                        </div>
                    </div>
                    <div className="weather-info__detail-container">
                        <div className="weather-info__col-1">
                            <label>Temperature :</label>
                        </div>
                        <div>
                            <label>{currentWeather.details.temp_min}</label> &#8451;
                            <label> ~ </label>
                            <label>{currentWeather.details.temp_max}</label> &#8451;
                        </div>
                    </div>
                    <div className="weather-info__detail-container">
                        <div className="weather-info__col-1">
                            <label>Humidity :</label>
                        </div>
                        <div>
                            <label>{currentWeather.details.humidity}</label>
                        </div>
                    </div>
                    <div className="weather-info__detail-container">
                        <div className="weather-info__col-1">
                            <label>Time :</label>
                        </div>
                        <div>
                            <label>{`${currentWeather.date} ${currentWeather.time}`}</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default WeatherInfo;
