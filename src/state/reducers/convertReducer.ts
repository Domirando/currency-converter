import {actionTypes} from "../action-types";
import {Actions} from "../actions";

export type InitialStateType = {
    request_amount?: number,
    converterResult?: number,
    from?: string,
    to?: string | Array<string>,
    response_amount?: Array<number> | number,
    error?: null | string,
    loading?: boolean
}
export let InitialState: InitialStateType = {
    request_amount: 0,
    converterResult: 0,
    from: "USD",
    to: [],
    response_amount: 0,
    error: null,
    loading: false
}
const reducer = (state: InitialStateType = InitialState, action: Actions) => {
    switch (action.type) {
        case actionTypes.CONVERT:
            return {
                ...state,
                loading: false,
                to: action.payload.to,
                from: action.payload.from,
                converterResult: action.payload.converterResult
            }
        case actionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                response_amount: action.payload.response_amount,
                to: action.payload.to,
            }
        case actionTypes.INITIALBACK:
            return {
                request_amount: 0,
                converterResult: 0,
                from: "USD",
                to: [],
                response_amount: 0,
                error: null,
                loading: false
            }
        default:
            return state
    }
}

export default reducer