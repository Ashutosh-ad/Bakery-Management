import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import LoginSignup from './pages/LoginSignup';
import Checkout from './pages/Checkout'; // Import Checkout page


const App=() =>{
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<LoginSignup />} />
                        <Route path="/signup" element={<LoginSignup />} />
                        {/* Protect the checkout route */}
                        <Route 
                         path="/checkout" 
                         element={
                             <PrivateRoute>
                                 <Checkout />
                            </PrivateRoute>
                             } 
                             />

                    
                        <Route path="/admin/login" element={
                             <PrivateRoute>
                                 <AdminLogin />
                            </PrivateRoute>
                             } 
                             />
                        <Route path="/admin" element={
                             <PrivateRoute>
                                 <AdminDashboard/>
                            </PrivateRoute>
                             } 
                             /> 
                        <Route path="/admin/add-product" element={
                             <PrivateRoute>
                                 <AdminAddProduct />
                            </PrivateRoute>
                             } 
                             />
                     </Routes>
                    </Router>
                    
                    <Footer />
            </CartProvider>
        </AuthProvider>
        
    );
}

export default App;
