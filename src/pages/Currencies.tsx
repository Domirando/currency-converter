import DataItem from "../components/DataItem";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../state/action-creators";
import {State} from "../state";
import {actionTypes} from "../state/action-types";

const Currencies = () => {
    const dispatch = useDispatch()

    let {response_amount, from, to, loading} = useSelector((state: State) => {
        return state.converter
    })
    let [currentList, setCurrentList] = useState(1)
    let nextTimes = Array.isArray(response_amount) ? Math.ceil(response_amount.length / 20) : 0
    useEffect(() => {
        dispatch({type: actionTypes.INITIALBACK});
        // @ts-ignore
        dispatch(fetchData());
    }, [])
    return (
        <div className={"mx-auto mt-[-160px] w-2/4"}>
            {!loading ? (
                <>
                    <h1 className={"text-red-500 text-md italic mb-1 float-right cursor-pointer"}
                        onClick={() => currentList !== nextTimes ?
                            setCurrentList(currentList + 1) : setCurrentList(1)}>Next</h1>
                <div
                    className="w-full bg-white shadow-2xl flex justify-center items-center overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-4 text-left text-xs text-center font-extrabold font-medium text-gray-500 uppercase tracking-wider"
                            >
                                From
                            </th>
                            <th
                                scope="col"
                                className="px-6 text-center py-3 text-left font-extrabold text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                To
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left font-extrabold text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Amount
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {
                            (currentList !== 1 && Array.isArray(response_amount)) ? response_amount.map((item, key) => (
                                (currentList * 20 - 20 < key && key <= currentList * 20)) ? (
                                <DataItem from={"USD"} key={`${key}_d`} to={to != null ? to[key] : ""} amount={item}/>
                            ) : null) : (    // @ts-ignore
                                Array.isArray(response_amount) ? response_amount.map((item, key) => (key <= 20) ? (
                                    <DataItem key={`${key}_i`} from={from ? from : "USD"} to={to != null ? to[key] : ""} amount={item}/>
                                ) : null) : null)}
                        </tbody>
                    </table>
                </div>
                </>
            ):<p className={"text-white text-center text-lg mt-8"}>Loading...</p>}
        </div>
    )
}

export default Currencies