import './Weather.css';
import { clearCurrentWeather } from '../action/weatherAction';
import { getState } from '../common/helpers';
import { useGetCurrentWeatherEndpoint } from '../services/weatherService';
import { useStore } from '../store/StateProvider';
import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherList from './WeatherList';
import _ from 'lodash';

const Weather = () => {
    const [state, dispatch] = useStore();

    const error = getState(state, 'error', null);
    const { weatherHistory = [], currentWeather = {} } = getState(state, 'weather', {});

    const [location, setLocation] = useState({ city: '', country: '' });
    const [isLocationInputEmpty, setIsLocationInputEmpty] = useState(false);

    // ============================================
    // METHODS
    // ============================================
    const handleOnClick = (e) => {
        e.preventDefault();
        if (location.city === '' && location.country === '') {
            setIsLocationInputEmpty(true);
            clearCurrentWeather(dispatch, {});
        } else {
            setIsLocationInputEmpty(false);
            getCurrentWeatherByLocation(location);
        }
    };

    const handleOnClear = (e) => {
        e.preventDefault();
        clearCurrentWeather(dispatch, {});
        setLocation({ city: '', country: '' });
    };

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleOnClick(e);
        }
    };

    // ============================================
    // HOOKS
    // ============================================
    const [getCurrentWeatherByLocation] = useGetCurrentWeatherEndpoint();

    // ============================================
    // RENDER
    // ============================================
    return (
        <div className="weather">
            <div className="weather__tiltle">
                <label>Today's Weather</label>
            </div>
            <hr />
            <div className="weather-form">
                <div className="weather-form__input-container">
                    <div className="weather-form__input-label">
                        <label>City : </label>
                    </div>

                    <input
                        type="text"
                        value={location.city}
                        onChange={(e) => setLocation({ ...location, city: e.target.value })}
                        onKeyUp={handleKeyUp}
                    />
                </div>
                <div className="weather-form__input-container">
                    <div className="weather-form__input-label">
                        <label>Country : </label>
                    </div>
                    <input
                        type="text"
                        value={location.country}
                        onChange={(e) => setLocation({ ...location, country: e.target.value })}
                        onKeyUp={handleKeyUp}
                    />
                </div>
                <div className="weather-form__btn-container">
                    <button className="cursor-pointer" onClick={handleOnClick} type="submit">
                        Search
                    </button>
                    <button className="cursor-pointer" onClick={handleOnClear}>
                        Clear
                    </button>
                </div>
            </div>
            {!_.isEmpty(error) || isLocationInputEmpty ? (
                <div className="weather-form__error-message text-center">
                    <label>
                        {!_.isEmpty(error)
                            ? error.message
                                ? error.message
                                : 'Invalid city or country'
                            : 'Invalid city or country'}
                    </label>
                </div>
            ) : (
                <WeatherInfo currentWeather={currentWeather} />
            )}
            <WeatherList
                weatherHistory={weatherHistory}
                getCurrentWeatherByLocation={getCurrentWeatherByLocation}
                setIsLocationInputEmpty={setIsLocationInputEmpty}
            />
        </div>
    );
};

export default Weather;
