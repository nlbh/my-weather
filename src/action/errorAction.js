export const ACTIONS = {
    CLEAR_ERROR: 'CLEAR_ERROR',
};

export const clearError = (dispatch) =>
    dispatch({
        type: ACTIONS.CLEAR_ERROR,
    });