import { createStore,combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { ApiReducer } from "./ApiReducer";
const rootReducer=combineReducers({
    count:CounterReducer,
    api:ApiReducer
})

export const Store=createStore(rootReducer)