import editorReducer from './reducers/builderReducer'
import { LOGOUT_USER } from '../constants/auth';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  editorReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === LOGOUT_USER) {
//     //eslint-disable-next-line
//     state.fileScanReducer.videoLinks = action.payload;
//   }

//   return reducers(state, action);
// };
export default rootReducer;
