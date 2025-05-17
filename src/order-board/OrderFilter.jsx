import React from 'react'
import FilterIcon from '../icon/FilterIcon'

function OrderFilter({ filter, handelFilterChange }) {
    return (
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
    )
}

export default OrderFilter