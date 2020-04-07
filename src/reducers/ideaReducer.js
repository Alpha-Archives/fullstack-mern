import {
  GET_IDEAS,
  ADD_IDEA,
  DELETE_IDEA,
} from '../actions/types';

const initialState = {
  ideas: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IDEAS:
      return {
        ...state,
        ideas: action.payload,
       
      };
    case DELETE_IDEA:
      return {
        ...state,
        ideas: state.ideas.filter(idea => idea._id !== action.payload)
      };
    case ADD_IDEA:
      return {
        ...state,
        ideas: [action.payload, ...state.ideas]
      };
    default:
      return state;
  }
}
