import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './LoginSignup.css';

const LoginSignup = () => {
    const { login } = useAuth(); // Access login function from context
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming login is successful, we'll set user data in context
        const userData = { name: formData.name || "User", email: formData.email };
        login(userData); // Save user data in context
        alert(isLogin ? "Login Successful" : "Signup Successful");
    };

    return (
        <div className="login-signup">
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </>
                )}
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            </form>

            <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"} 
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign Up" : "Login"}
                </button>
            </p>
        </div>
    );
};

export default LoginSignup;
