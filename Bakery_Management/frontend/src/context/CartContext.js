import React, { createContext, useState, useContext } from 'react';

// Create context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Store cart items here

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Add product to cart
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId)); // Remove product from cart
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};
