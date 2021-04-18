import weatherReducer from '../reducer/weatherReducer'
import errorReducer from '../reducer/errorReducer'

export default function appReducer(state, action) {
    const {
        weather,
        error
    } = state;
    const updatedState = {
        error: errorReducer(error, action),
        weather: weatherReducer(weather, action),
    };
    return updatedState;
}
