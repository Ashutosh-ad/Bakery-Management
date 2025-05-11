import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Products.css';

const Products = () => {
    const { user } = useAuth(); // Get user data from context
    const { addToCart } = useCart(); // Get addToCart function from CartContext
    const products = [
        {
            id: 1,
            name: 'Chocolate Cake',
            price: 15,
            image: '/images/chocolate-cake.jpeg',  // image stored in public/images
          },
          {
            id: 2,
            name: 'Cupcakes',
            price: 10,
            image: '/images/cupcakes.jpeg',  // image stored in public/images
          },
          {
            id: 3,
            name: 'Croissants',
            price: 5,
            image: '/images/croissants.jpeg',  // image stored in public/images
          },
          {
            id: 4,
            name: 'Croissants',
            price: 5,
            image: '/images/croissants.jpeg',  // image stored in public/images
          },
          {
            id: 5,
            name: 'Croissants',
            price: 5,
            image: '/images/croissants.jpeg',  // image stored in public/images
          },
        ];
        

    const handleOrder = (product) => {
        if (!user) {
            alert("Please log in or sign up before placing an order.");
        } else {
            addToCart(product); // Add the product to the cart
            alert(`Added to cart: ${product.name}`);
        }
    };

    return (
        <div className="products">
            <h2 className="product-title">Our Products</h2>
            <p>Explore our delicious bakery items below!</p>

            <div className="product-container">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>${product.price}</strong></p>
                        <button onClick={() => handleOrder(product)}>
                            {user ? "Add to Cart" : "Login to Order"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
