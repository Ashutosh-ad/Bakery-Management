import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to the cart.");
        } else {
            navigate('/checkout'); // Navigate to Checkout page
        }
    };

    const handleGoToProducts = () => {
        navigate('/products'); // Navigate to Products page if cart is empty
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                    <button onClick={handleGoToProducts} className="go-to-products-btn">
                        Go to Products
                    </button>
                </div>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p><strong>${item.price}</strong></p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}

            {cart.length > 0 && (
                <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
            )}
        </div>
    );
};

export default Cart;
