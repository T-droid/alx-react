import iceCreamReducer from "./IceCream/iceCreamReducer";
import cakeReducer from "./cakes/cakeReducer";
import { combineReducers } from "redux";
import userReducer from "./users/userReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer