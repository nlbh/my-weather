import { API_KEY } from '../common/constants';
import { clearError } from '../action/errorAction';
import { getWeather, getWeatherFailure, getWeatherSuccess } from '../action/weatherAction';
import { useEffect, useState } from 'react';
import moment from 'moment';

import { useDispatch } from '../store/StateProvider';

export function useGetCurrentWeatherEndpoint() {
    const dispatch = useDispatch();
    const [trigger, setTrigger] = useState(null);
    const [location, setLocation] = useState({ city: '', country: '' });

    // ============================================
    // METHODS
    // ============================================
    const getCurrentWeatherByLocation = (location) => {
        getWeather(dispatch);
        setLocation(location);
        setTrigger(+new Date());
    };

    // ============================================
    // HOOKS
    // ============================================
    useEffect(() => {
        if (!trigger) return;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${
                location.city ? location.city.trimEnd() : location.city
            },,${location.country ? location.country.trimEnd() : location.country}&units=metric`,
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setTrigger(null);
                    clearError(dispatch);
                    if (result.cod === 200) {
                        getWeatherSuccess(dispatch, {
                            city: result.name,
                            country: result.sys.country,
                            date: moment().format('YYYY-MM-DD'),
                            details: result.main,
                            time: moment().format('h:mm:ss a'),
                            weather: result.weather[0],
                        });
                    } else {
                        getWeatherSuccess(dispatch, {});
                        getWeatherFailure(dispatch, result);
                    }
                },
                (error) => {
                    setTrigger(null);
                    clearError(dispatch);
                    getWeatherSuccess(dispatch, {});
                    getWeatherFailure(dispatch, { message: error.message });
                },
            );
    }, [dispatch, location, trigger]);

    return [getCurrentWeatherByLocation];
}
