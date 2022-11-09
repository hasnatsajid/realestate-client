import {
  FETCH_ALL,
  FETCH_BUY,
  FETCH_RENT,
  FETCH_BY_SEARCH,
  FETCH_BY_CREATOR,
  FETCH_LISTING,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  COMMENT,
} from '../constants/actionTypes';

export default (state = { isLoading: true, listings: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
    case FETCH_BUY:
    case FETCH_RENT:
      return {
        ...state,
        listings: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, listings: action.payload.data };
    case FETCH_LISTING:
      return { ...state, listing: action.payload.listing };
    case LIKE:
      return { ...state, listings: state.listings.map((listing) => (listing._id === action.payload._id ? action.payload : listing)) };
    case COMMENT:
      return {
        ...state,
        listings: state.listings.map((listing) => {
          if (listing._id == +action.payload._id) {
            return action.payload;
          }
          return listing;
        }),
      };
    case CREATE:
      return { ...state, listings: [...state.listings, action.payload] };
    case UPDATE:
      return { ...state, listings: state.listings.map((listing) => (listing._id === action.payload._id ? action.payload : listing)) };
    case DELETE:
      return { ...state, listings: state.listings.filter((listing) => listing._id !== action.payload) };
    default:
      return state;
  }
};
