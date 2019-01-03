import { ADD_ITEM } from "./constants";

function rootReducer(state, action) {

    if (action.type === ADD_ITEM) {
            var tempObj = JSON.parse(JSON.stringify(state));
            tempObj[action.payload.layoutName][action.payload.recId].push(action.payload.data);
            return tempObj; 
    }
    return state;
}

export default rootReducer;