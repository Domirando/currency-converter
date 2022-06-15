import {combineReducers} from 'redux'
import convertReducer from "./convertReducer";

const reducers = combineReducers({
    converter: convertReducer
})

export default reducers

export type State = ReturnType<typeof reducers>