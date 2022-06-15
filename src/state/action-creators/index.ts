import {actionTypes} from "../action-types";
import axios from "axios";
import {Actions} from "../actions";
import {Dispatch} from "react";

export const fetchData = (amount?: number, req_from?: string, to?: string) => {
    return async (dispatch: Dispatch<Actions>) => {
        try {
            dispatch({type: actionTypes.FETCH_WEATHER_REQUEST})
            let response: any;
            if (amount && req_from && to) {
                response = await axios.get(`https://api.fastforex.io/fetch-one?from=${req_from}&to=${to}&api_key=${process.env.API_KEY}`)
                let item = Object.entries(response).map(item => item)
                // @ts-ignore
                let item2 = Object.entries(item[0][1].result).map(item => item)
                let value: any = item2[0][1]
                let res = amount * value
                dispatch({type: actionTypes.CONVERT, payload: {
                        from: req_from,
                        to: to,
                        converterResult: res
                    }})
            }else {
                response = await axios.get(`https://api.fastforex.io/fetch-all?api_key=${process.env.React_App_API_KEY}`)
                console.log("response:", response.data.results)
                let items = Object.entries(response.data.results).map(item => item)
                let to = items.map(item => item[0])
                let amount = items.map(item => item[1])
                console.log("amount", amount)
                dispatch({type: actionTypes.FETCH_WEATHER_SUCCESS, payload: {
                        from: response.data.base,
                        to: to,
                        // @ts-ignore
                        response_amount: amount
                    }})
            }
        } catch (error) {
            dispatch({type: actionTypes.FETCH_WEATHER_FAILURE, payload: "ooops, something went wrong!"})
        }
    }
}