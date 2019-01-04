import { createStore } from 'redux';
import rootReducer from "./reducers";

const initialState = {
    layout_0: {
        containers: [[],[],[],[],[]],
        structure: [1, 1, 1, 2]
    },
    layout_1:{
        containers: [[],[],[],[],[],[]],
        structure: [1, 2, 2, 1]
    },
    layout_2: {
        containers: [[],[],[],[],[]],
        structure: [1, 1, 2, 1]
    },
    layout_3: {
        containers: [[],[],[],[],[]],
        structure: [1, 2, 1, 1]
    },
    layout_4: {
        containers: [[],[],[],[],[]],
        structure: [1, 1, 1, 2]
    },
    layout_5: {
        containers: [[],[],[],[],[],[]],
        structure: [1, 2, 2, 1]
    },
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;