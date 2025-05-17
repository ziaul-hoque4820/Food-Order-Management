/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import FilterIcon from '../icon/FilterIcon';

function OrderSummary({ order, setOrders }) {
    const [filter, setFilter] = useState('All');

    const handelFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filterOrders = order.filter(item => {
        if (filter === "All") return true;

        return item.status === filter.toUpperCase();
    });

    const totalOrders = filterOrders.length;
    const pendingOrders = filterOrders.filter(item => item.status === "PENDING").length;
    const deliveredOrders = filterOrders.filter(item => item.status === "DELIVERED").length;

    const handleDelete = (orderId) => {
        setOrders(prevOrders => prevOrders.filter(item => item.id !== orderId))
    }
    const handleDeliver = (orderId) => {
        setOrders(prevOrders => 
            prevOrders.map(item => 
                item.id === orderId ? { ...item, status: "DELIVERED"} : item
            )
        )
    }

    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* Order Summary  */}
            <div>
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Total Orders  */}
                    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                        <div className="text-5xl font-bold text-yellow-500 mb-2">{totalOrders}</div>
                        <div
                            className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                            Total Order
                        </div>
                    </div>

                    {/* Pending Orders  */}
                    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                        <div className="text-5xl font-bold text-red-500 mb-2">{pendingOrders}</div>
                        <div
                            className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                            Pending
                        </div>
                    </div>

                    {/* Delivered Orders  */}
                    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                        <div className="text-5xl font-bold text-green-500 mb-2">{deliveredOrders}</div>
                        <div
                            className="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                            Delivered
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Reports  */}
            <div>
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">Order Reports</h2>

                    <div className="flex gap-4 items-center">
                        <FilterIcon />
                        <select
                            value={filter}
                            onChange={handelFilterChange}
                            className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
                            <option>All</option>
                            <option>Pending</option>
                            <option>Delivered</option>
                        </select>
                    </div>
                </div>
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
                                            <button
                                            onClick={() => handleDeliver(item.id)}
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary