import TYPES from '../types';

export const addFavoriteBook = (book) => {
  return (dispatch) => {
    dispatch({ type: TYPES.ADD_FAVORITE_BOOK, book });
  };
};

export const removeFavoriteBook = (book) => {
  return (dispatch) => {
    dispatch({ type: TYPES.REMOVE_FAVORITE_BOOK, book });
  };
};
