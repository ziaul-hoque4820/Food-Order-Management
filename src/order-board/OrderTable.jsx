import React from 'react'

function OrderTable({filterOrders, handleDelete, handleDeliver}) {
    return (
        <div className="bg-cardbg rounded-lg p-4">
            <div className="reports-container">
                <table className="min-w-full">
                    <thead>
                        <tr className="text-left text-sm">
                            <th className="pb-3 font-medium">ID</th>
                            <th className="pb-3 font-medium">Customer Name</th>
                            <th className="pb-3 font-medium">Items</th>
                            <th className="pb-3 font-medium">Amount</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {filterOrders.map(item => (
                            <tr key={item.id} className="border-t border-gray-700">
                                <td className="py-3">{item.id}</td>
                                <td className="py-3">{item.customerName}</td>
                                <td className="py-3">{item.items.length}</td>
                                <td className="py-3">{item.totalAmount}</td>
                                <td className="py-3">
                                    <span className={item.status === "PENDING" ? 'text-red-500' : 'text-green-500'}>{item.status}</span>
                                </td>
                                <td className="py-3">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                    {item.status === "PENDING" && (
                                        <button
                                            onClick={() => handleDeliver(item.id)}
                                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                                            DELIVER
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderTable