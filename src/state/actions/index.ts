import {actionTypes} from "../action-types";
import {InitialStateType} from "../reducers/convertReducer";

interface ConvertAction {
    type: actionTypes.CONVERT,
    payload: InitialStateType
}
interface fetchActionError {
    type: actionTypes.FETCH_WEATHER_FAILURE,
    payload: string
}
interface fetchActionRequest {
    type: actionTypes.FETCH_WEATHER_REQUEST,
}
interface fetchActionSuccess {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload: InitialStateType
}
interface initialBack {
    type: actionTypes.INITIALBACK,
}

export type Actions = initialBack | ConvertAction | fetchActionError | fetchActionRequest | fetchActionSuccess