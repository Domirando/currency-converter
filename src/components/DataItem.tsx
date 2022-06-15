import React from "react";

const DataTable: React.FC<{amount:number, from:string, to:string}> = ({amount, from, to}) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center">
                    <div>
                        <div
                            className="text-sm font-medium text-gray-900"
                        >
                        </div>
                        <div
                            className="text-sm text-gray-700"
                        >
                            {from}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-center whitespace-nowrap">
                <div
                    className="text-sm text-gray-700"
                >
                    {to}
                </div>
            </td>
            <td className="px-6 py-4 justify-center flex gap-x-[10px] whitespace-nowrap text-right text-sm">
                {amount}
            </td>
        </tr>
        )
}
export default DataTable