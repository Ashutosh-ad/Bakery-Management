
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/products');  // Redirects the user to the Products page
    };
    const [email, setEmail] = useState('');

    const handleSubscription = () => {
        alert(`Subscribed with email: ${email}`);
        setEmail('');
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <header className="hero">
                <h1>Welcome to Our Backery</h1>
                <p>Explore our wide range of fresh and delicious products.</p>
                <p>Freshly baked goods delivered to your door!</p>
                <button className="shop-now-btn" onClick={handleShopNowClick}>
                Order Now
            </button>
            </header>

            {/* Categories */}
            <section className="categories">
                <h2>Our Specialties</h2>
                <div className="categories-list">
                    <div className="category">
                        <img src="/images/cakes.jpeg" alt="Cakes" />
                        <h3>Cakes</h3>
                    </div>
                    <div className="category">
                        <img src="/images/pastries.jpg" alt="Pastries" />
                        <h3>Pastries</h3>
                    </div>
                    <div className="category">
                        <img src="/images/bread1.jpeg" alt="Bread" />
                        <h3>Bread</h3>
                    </div>
                </div>
            </section>
             {/* Featured Products */}
             <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    <div className="product">
                        <img src="/images/product1.jpeg" alt="Chocolate Cake" />
                        <h3>Chocolate Cake</h3>
                        <p>$25.00</p>
                    </div>
                    <div className="product">
                        <img src="/images/product2.jpeg" alt="Strawberry Tart" />
                        <h3>Strawberry Tart</h3>
                        <p>$15.00</p>
                    </div>
                    <div className="product">
                        <img src="/images/product3.jpg" alt="French Bread" />
                        <h3>French Bread</h3>
                        <p>$8.00</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-list">
                    <div className="testimonial">
                        <p>"The best cakes I've ever tasted! Highly recommend."</p>
                        <span>- Jane Doe</span>
                    </div>
                    <div className="testimonial">
                        <p>"Amazing pastries and fantastic service!"</p>
                        <span>- John Smith</span>
                    </div>
                </div>
            </section>
             {/* NewsLetter */}
             <section className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <button id='subscribe' onClick={handleSubscription}>Subscribe</button>
        </section>

        </div>
        
          
    );
    
    
    
};

export default Home;
