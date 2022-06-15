import {useDispatch, useSelector} from "react-redux";
import {State} from "../state";
import {useEffect, useState} from "react";
import {fetchData} from "../state/action-creators";
import {actionTypes} from "../state/action-types";

const Converter = () => {
    const dispatch = useDispatch()
    let {loading, converterResult} = useSelector((state: State) => state.converter)
    const [inputText, setInput] = useState("")
    useEffect(() => {
        dispatch({type: actionTypes.INITIALBACK});
    }, [])
    const submitHandler = () => {
        let l = inputText.length
        let to = inputText.slice(l-3, l)
        let from = inputText.slice(l-10, l-7)
        let amount = inputText.slice(0, l-10)
        // @ts-ignore
        dispatch(fetchData(amount, from, to))
    }
    return (
        <div
            className={"absolute top-60 left-0 right-0 my-0 mx-auto min-h-[270px] rounded-xl overflow-hidden p-6 w-1/2 bg-white shadow-2xl"}>
            {!loading ? (
            <div className={"flex flex-col gap-5 items-center justify-center"}>
                <div className={"font-bold flex flex-row w-full overflow-hidden gap-1"}>
                    <input onChange={(e) => setInput(e.target.value)} placeholder={"E.g: 15 usd in rub"} className={"outline-0 w-[80%] bg-slate-100 rounded-xl p-4"}/>
                    <button onClick={submitHandler}
                            className={"bg-sky-600 px-7 py-3 w-[20%] self-end text-white font-bold justify-self-end rounded-xl"}>Convert
                    </button>
                </div>
                <p className={"text-pink-600 font-bold text-center text-2xl"}>Result: {converterResult}</p>
            </div>): "Loading..."}
        </div>
    )
}

export default Converter