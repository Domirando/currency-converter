import {createStore, applyMiddleware} from 'redux'
import reducers from "./reducers";
import thunk from 'redux-thunk'

export const store = createStore(reducers, {}, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store