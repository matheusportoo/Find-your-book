import TYPES from '../types';

export const setTerm = (term) => {
  return (dispatch) => {
    dispatch({ type: TYPES.SET_TERM, term });
  };
};
