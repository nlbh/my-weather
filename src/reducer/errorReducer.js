import { ACTIONS } from '../action/errorAction';
import { ACTIONS as WEATHER } from '../action/weatherAction';

export default function errorsReducer(error, { type, payload = null }) {
    switch (type) {
        case WEATHER.GET_WEATHER_FAILURE:
            return {
                ...error,
                ...payload,
            };
        case ACTIONS.CLEAR_ERROR:
            return {};
        default:
            return error;
    }
}
