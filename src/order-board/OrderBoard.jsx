import React, { useState } from 'react'
import CreateOrder from './CreateOrder'
import OrderSummary from './OrderSummary'

function OrderBoard() {
    const [orders, setOrders] = useState([]);

    const handleOrderSubmit = (orderData) => {
        const newOrder = {
            ...orderData,
            id: Date.now(),
            status: "PENDING"
        };
        setOrders([...orders, newOrder]);
        
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            <CreateOrder onOrderSubmit={handleOrderSubmit} />
            <OrderSummary order={orders} setOrders={setOrders} />
        </div>
    )
}

export default OrderBoard