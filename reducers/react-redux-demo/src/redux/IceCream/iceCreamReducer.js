import { BUY_ICE_CREAM } from "./IceCreamTypes";
import buyIceCream from "./IceCreamAction";


const initialState = {
    numOfIceCreams: 20
}

export default function iceCreamReducer(state=initialState, action) {
    switch(action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            }

        default: return state
    }
}