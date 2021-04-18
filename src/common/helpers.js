import _ from 'lodash';

export const getState = (state, path, defaultValue) => _.get(state, path, defaultValue);