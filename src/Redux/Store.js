import { createStore } from "redux";
import { combineReducers } from "redux";
import { eventsReducer } from "./Reducer";

const rootReducer = combineReducers({
    eventsReducer: eventsReducer
})

const store = createStore(rootReducer)

export default store;