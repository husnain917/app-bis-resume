import { CUSTOM_FONT } from '../actions/fontAction';

const initialState = {
  font: 'sans-serif',
};
const fontReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOM_FONT:
      return {
        ...state,
        font: action.payload,
      };

    default:
      return state;
  }
};
export default fontReducer;
