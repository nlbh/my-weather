import React, { createContext, useContext, useReducer } from 'react';
import _ from 'lodash';

const AppContext = createContext();

const StateProvider = ({ reducer, initialState, children }) => (
    <AppContext.Provider value={useReducer(reducer, initialState)}>{children}</AppContext.Provider>
);

const useStore = () => useContext(AppContext);

const useStateValue = (path, defaultValue) => {
    const [state] = useStore();
    return _.get(state, path, defaultValue);
};

const useDispatch = () => useStore()[1];

export { StateProvider, useStore, useStateValue, useDispatch };
