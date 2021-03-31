import TYPES from '../types';

export function term(state = '', action) {
  if (action.type === TYPES.SET_TERM) {
    return action.term;
  }

  return state;
}
