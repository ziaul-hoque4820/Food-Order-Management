import React from 'react'
import MinusIcon from '../icon/MinusIcon'
import PlusIcon from '../icon/PlusIcon'

function FoodItemList({foodItems, selectedItems, toggleItemSelection}) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Choose Items</label>
            <div className="items-container">
                {foodItems.map(foodItem => {
                    const isSelected = selectedItems.some(item => item.id === foodItem.id)
                    return (
                        <div
                            key={foodItem.id}
                            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12   flex items-center justify-center mr-3">
                                    <img src={foodItem.image} alt={foodItem.foodName} className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-medium">{foodItem.foodName}</h3>
                                    <p className="text-xs text-gray-400">BDT {foodItem.price}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => toggleItemSelection(foodItem)}
                                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                                {
                                    isSelected ?
                                        <MinusIcon />
                                        :
                                        <PlusIcon />
                                }
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FoodItemList