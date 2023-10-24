import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducer";
import userReducer from "./User/userReducer";

//For combine more than one reducer
const RootReducer = combineReducers({
    cake: CakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
})

export default RootReducer;