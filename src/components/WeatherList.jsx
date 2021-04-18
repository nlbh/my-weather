import './Weather.css';
import { SearchOutline, TrashOutline } from 'react-ionicons';
import { deleteWeather } from '../action/weatherAction';
import { useDispatch } from '../store/StateProvider';
import React from 'react';
import _ from 'lodash';

const WeatherList = ({
    weatherHistory = [],
    getCurrentWeatherByLocation,
    setIsLocationInputEmpty,
}) => {
    const dispatch = useDispatch();

    // ============================================
    // METHODS
    // ============================================
    const handleSearch = (weather) => {
        setIsLocationInputEmpty(false);
        getCurrentWeatherByLocation({ city: weather.city, country: weather.country });
    };

    const handleDelete = (idx) => {
        deleteWeather(dispatch, idx);
    };

    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="weather-list">
            <div className="weather__tiltle">
                <label>Search History</label>
            </div>
            <hr />
            {weatherHistory && weatherHistory.length ? (
                _.map(weatherHistory, (weather, idx) => (
                    <div key={idx} className="weather-list__outer-container">
                        <div className="weather-list__container">
                            <div className="weather-list__container__idx">
                                <label>{idx + 1}. </label>
                            </div>
                            <div className="weather-list__container__city-country-time">
                                <span>{`${weather.city}, ${weather.country}`}</span>
                                <span>{weather.time}</span>
                            </div>
                            <div className="weather-list__container__btn">
                                <SearchOutline
                                    className="cursor-pointer"
                                    color={'#2E4053'}
                                    onClick={() => handleSearch(weather)}
                                />
                                <TrashOutline
                                    className="cursor-pointer"
                                    color={'#CB4335'}
                                    onClick={() => handleDelete(idx)}
                                />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="weather-list__outer-container text-center">
                    <label>No Record</label>
                </div>
            )}
        </div>
    );
};

export default WeatherList;
