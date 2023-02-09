import { applyMiddleware, createStore } from "redux";
import rootReducer from "../store/rootReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
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
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
export default store;
export { persistor };
