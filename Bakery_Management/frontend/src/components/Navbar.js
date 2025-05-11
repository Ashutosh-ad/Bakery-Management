import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the context to get user data
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth(); // Get user data and logout function from context

    return (
        <nav className="navbar">
            <h1 className="logo">The Baker's Delight</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {!user ? (
                    <li><Link to="/login">Login/Signup</Link></li>
                ) : (
                    <>
                        <li>Hello, {user.name}</li>
                        <li><button onClick={logout}>Logout</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
