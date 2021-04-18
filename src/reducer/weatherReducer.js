import { ACTIONS } from '../action/weatherAction';
import _ from 'lodash';

export default function weatherReducer(
    weather = { currentWeather: {}, weatherHistory: [] },
    { type, payload = null },
) {
    switch (type) {
        case ACTIONS.CLEAR_CURRENT_WEATHER:
        case ACTIONS.GET_WEATHER_SUCCESS:
            const newWeatherHistory = !_.isEmpty(weather.currentWeather)
                ? [weather.currentWeather, ...weather.weatherHistory]
                : weather.weatherHistory;
            return {
                ...weather,
                currentWeather: payload,
                weatherHistory: newWeatherHistory,
            };
        case ACTIONS.DELETE_WEATHER:
            return {
                ...weather,
                weatherHistory: _.filter(weather.weatherHistory, function(e, idx) {
                    return idx !== payload;
                }),
            };
        case ACTIONS.GET_WEATHER:
        default: {
            return weather;
        }
    }
}
