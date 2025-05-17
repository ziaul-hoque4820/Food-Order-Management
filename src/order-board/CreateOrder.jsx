/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import CustomerNameInput from './CustomerNameInput';
import FoodItemList from './FoodItemList';
import PlaceOrderButton from './PlaceOrderButton';

function CreateOrder({ onOrderSubmit }) {
    const [customerInfo, setCustomerInfo] = useState({ name: "" });
    const [selectedItems, setSelectedItems] = useState([]);

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
        if (isSelected) {
            setSelectedItems(selectedItems.filter(selectde => selectde.id !== item.id))
        }
        else {
            setSelectedItems([...selectedItems, item]);
        }
    };
    const calculatorTotal = () => {
        return selectedItems.reduce((total, item) => total + item.price, 0)
    }
    const handleFoodOrder = () => {
        if (!customerInfo.name.trim()) {
            alert("Please enter customer name!");
            return;
        }
        const orderData = {
            customerName: customerInfo.name,
            items: selectedItems,
            totalAmount: calculatorTotal(),
        };

        onOrderSubmit(orderData);

        setSelectedItems([]);
        setCustomerInfo({ name: "" });
    }

    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">
                Accurately fulfill customer orders based on a precise understanding of their requirements.
            </p>
            <CustomerNameInput
                customerInfo={customerInfo}
                handleNameChange={handleNameChange}
            />
            <FoodItemList
                foodItems={foodItems}
                selectedItems={selectedItems}
                toggleItemSelection={toggleItemSelection}
            />
            <PlaceOrderButton
                handleFoodOrder={handleFoodOrder}
                calculatorTotal={calculatorTotal}
            />
        </div>
    )
}

export default CreateOrder