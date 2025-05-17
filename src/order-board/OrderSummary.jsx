/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import OrderStats from './OrderStats';
import OrderFilter from './OrderFilter';
import OrderTable from './OrderTable';

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
                item.id === orderId ? { ...item, status: "DELIVERED" } : item
            )
        )
    }

    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* Order Summary  */}
            <div>
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <OrderStats
                    totalOrders={totalOrders}
                    pendingOrders={pendingOrders}
                    deliveredOrders={deliveredOrders}
                />
            </div>

            {/* Order Reports  */}
            <div>
                <OrderFilter
                    filter={filter}
                    handelFilterChange={handelFilterChange}
                />
                <OrderTable
                    filterOrders={filterOrders}
                    handleDelete={handleDelete}
                    handleDeliver={handleDeliver}
                />
            </div>
        </div>
    )
}

export default OrderSummary