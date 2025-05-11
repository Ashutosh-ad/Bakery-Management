import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Get cart data from CartContext
import './Checkout.css';

const Checkout = () => {
    const { cart } = useCart(); // Get cart items from context
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!address || !paymentMethod) {
            alert("Please fill in all fields.");
            return;
        }
        // Simulate order confirmation (you could send this info to a server here)
        setOrderConfirmed(true);
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>

            {orderConfirmed ? (
                <div className="order-confirmation">
                    <h3>Order Confirmed!</h3>
                    <p>Thank you for your order. Your items will be shipped soon.</p>
                </div>
            ) : (
                <>
                    <h3>Review Your Cart</h3>
                    <div className="cart-summary">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <p><strong>${item.price}</strong></p>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label>
                            Shipping Address:
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your shipping address"
                                required
                            />
                        </label>

                        <label>
                            Payment Method:
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                            >
                                <option value="creditCard">Credit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </label>

                        <button type="submit">Confirm Order</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Checkout;
