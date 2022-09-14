import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../store/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [thunk];
/* eslint-disable no-underscore-dangle */

// const configureStore = (initialState) => {
//   const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middlewares)),
// 	);
//   // if (module.hot) {
//   //   module.hot.accept('../store/rootReducer.js', () => {
//   //     const nextRootReducer = require('../store/rootReducer');
//   //     store.replaceReducer(nextRootReducer);
//   //   });
//   // }

//   return store;
// }

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
