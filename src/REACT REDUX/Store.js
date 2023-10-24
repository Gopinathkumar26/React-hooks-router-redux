import { createStore, applyMiddleware } from "redux";
//import CakeReducer from "./Cake/CakeReducer";
//import iceCreamReducer from "./IceCream/iceCreamReducer";
import RootReducer from "./RootReducer";

//applyMiddleware and logger
import logger from "redux-logger";

//Redux devtool extension
import { composeWithDevTools } from "redux-devtools-extension";

//For async function
import thunk from "redux-thunk";

// const store = createStore(CakeReducer, iceCreamReducer)
// const store = createStore(RootReducer)
// const store = createStore(RootReducer, applyMiddleware(logger))
//const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger)))
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))


export default store;