import { FEEDBACK } from '../actions/feedbackAction';
const initialState = {
  feedBack: false,
};
export const feedBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEEDBACK:
      return {
        ...state,
        feedBack: action.payload,
      };

    default:
      return state;
  }
};
