import editorReducer from './reducers/builderReducer';
import { LOGOUT_USER } from '../constants/auth';
import { combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';
import AuthReducer from './reducers/AuthReducer';
import fontReducer from './reducers/fontReducer';
const rootReducer = combineReducers({
  editorReducer,
  themeReducer,
  AuthReducer,
  fontReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === LOGOUT_USER) {
//     //eslint-disable-next-line
//     state.fileScanReducer.videoLinks = action.payload;
//   }

//   return reducers(state, action);
// };
export default rootReducer;
