import { createStore } from 'redux';
import rootReducer from "./reducers";

const initialState = {
    layout_0: [
        [],
        [],
        [],
        [],
        []
    ],
    layout_1: [
        [],
        [],
        [],
        []
    ],
    layout_2: [
        [],
        [],
        [],
        []
    ],
    layout_3: [
        [],
        [],
        [],
        [],
        []
    ],
    layout_4: [
        [],
        [],
        [],
        []
    ],
    layout_5: [
        [],
        [],
        [],
        []
    ],

};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;