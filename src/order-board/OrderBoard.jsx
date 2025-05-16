import React from 'react'
import CreateOrder from './CreateOrder'
import OrderSummary from './OrderSummary'

function OrderBoard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            <CreateOrder />
            <OrderSummary />
        </div>
    )
}

export default OrderBoard