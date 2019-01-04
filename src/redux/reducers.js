import { ADD_ITEM } from "./constants";

function rootReducer(state, action) {

    if (action.type === ADD_ITEM) {
            let tempObj = JSON.parse(JSON.stringify(state));
            tempObj[action.payload.layoutName].containers[action.payload.recId].push(action.payload.data);
            return tempObj; 
    }
    return state;
}

export default rootReducer;