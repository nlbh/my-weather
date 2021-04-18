export const ACTIONS = {
    GET_WEATHER: 'GET_WEATHER',
    GET_WEATHER_FAILURE: 'GET_WEATHER_FAILURE',
    GET_WEATHER_SUCCESS: 'GET_WEATHER_SUCCESS',
    DELETE_WEATHER: 'DELETE_WEATHER',
    CLEAR_CURRENT_WEATHER: 'CLEAR_CURRENT_WEATHER',
};

export const getWeather = (dispatch) =>
    dispatch({
        type: ACTIONS.GET_WEATHER,
    });

export const getWeatherSuccess = (dispatch, payload) =>
    dispatch({
        payload,
        type: ACTIONS.GET_WEATHER_SUCCESS,
    });

export const getWeatherFailure = (dispatch, payload) =>
    dispatch({
        payload,
        type: ACTIONS.GET_WEATHER_FAILURE,
    });

export const deleteWeather = (dispatch, payload) =>
    dispatch({
        payload,
        type: ACTIONS.DELETE_WEATHER,
    });

export const clearCurrentWeather = (dispatch, payload) =>
    dispatch({
        payload,
        type: ACTIONS.CLEAR_CURRENT_WEATHER,
    });
