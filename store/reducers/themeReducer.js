import { THEME_MODE } from '../actions/themeAction';

const initialState = {
  theme: {
    backgroundColor: 'black',
    color: 'white',
  },
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_MODE:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
export default themeReducer;
