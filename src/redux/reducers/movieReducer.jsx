import { ActionTypes } from "../../constant/actionTypes";

const initialState = {
  popularMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MOVİES:
      return {
        ...state,
        popularMovies: action.payload.results,
        isLoading: false,
      };
    case ActionTypes.SET_LOADİNG:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionTypes.SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};
