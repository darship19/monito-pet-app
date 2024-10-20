// src/components/OurProducts.js
import React, { useState, useEffect } from 'react';
import './OurProducts.css'; // Import the corresponding CSS file
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

const OurProducts = () => {
  const [products, setProducts] = useState([]); // State to store the fetched product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the Products API
    axios.get('https://monitor-backend-rust.vercel.app/api/products')
      .then((response) => {
        setProducts(response.data); // Set products to the fetched data
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Error fetching products.");
        setLoading(false); // Stop loading in case of an error
      });
  }, []);

  const handleViewMore = (product) => {
    navigate('/product-details', { state: { product } });
  };

  if (loading) return <div>Loading products...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.product}</p>
            {product.size && <p>Size: {product.size}</p>}
            <p className="product-price">{product.price}</p>
            <div className="product-gift">{product.description}</div>
            <button className="view-more" onClick={() => handleViewMore(product)}>
              View more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
