/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import MinusIcon from '../icon/MinusIcon';
import PlusIcon from '../icon/PlusIcon';
// import hamburger from '../../public/assets/'

function CreateOrder({onOrderSubmit}) {
    const [customerInfo, setCustomerInfo] = useState({ name: "" });
    const [selectedItems, setSelectedItems] = useState([]);
    const [orderSubmitted, setOrderSubmitted] = useState(false);

    const foodItems = [
        { id: 1, foodName: "Hamburger", price: 300, image: "/assets/hamburger.svg" },
        { id: 2, foodName: "Chicken Nuggets", price: 500, image: "/assets/chicken.svg" },
        { id: 3, foodName: "Submarine Sandwich", price: 400, image: "/assets/submarine.svg" },
        { id: 4, foodName: "Pizza slices", price: 350, image: "/assets/pizza.svg" },
        { id: 5, foodName: "Salad", price: 200, image: "/assets/salad.png" }
    ];
    const handleNameChange = (e) => {
        setCustomerInfo({
            name: e.target.value
        })
    };
    const toggleItemSelection = (item) => {
        const isSelected = selectedItems.some(selected => selected.id === item.id)
        if(isSelected) {
            setSelectedItems(selectedItems.filter(selectde => selectde.id !== item.id))
        }
        else{
            setSelectedItems([...selectedItems, item]);
        }
    };
    const calculatorTotal = () => {
        return selectedItems.reduce((total, item) => total + item.price, 0)
    }
    const handleFoodOrder = () => {
        if(!customerInfo.name.trim()) {
            alert("Please enter customer name!");
            return;
        }
        const orderData= {
            customerName: customerInfo.name,
            items: selectedItems,
            totalAmount: calculatorTotal(),
        };

        onOrderSubmit(orderData);
        
        setOrderSubmitted(true);
        setSelectedItems([]);
        setCustomerInfo({name: ""});
    }

    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                understanding of their requirements.</p>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Customer Name</label>
                <input
                    type="text"
                    name="customerName"
                    value={customerInfo.name}
                    onChange={handleNameChange}
                    required
                    className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300" />
            </div>

            {/* Choose Items  */}
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

            {/* Place Order Button  */}
            <button
            onClick={handleFoodOrder}
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Place Order (BDT {calculatorTotal()})
            </button>
        </div>
    )
}

export default CreateOrder