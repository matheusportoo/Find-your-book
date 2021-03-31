import TYPES from '../types';

export function favoriteBook(state = [], action) {
  if (action.type === TYPES.ADD_FAVORITE_BOOK) {
    return state.concat(action.book);
  }

  if (action.type === TYPES.REMOVE_FAVORITE_BOOK) {
    return state.filter((book) => book.id !== action.book.id);
  }

  return state;
}
