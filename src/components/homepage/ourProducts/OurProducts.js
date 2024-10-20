// src/components/OurProducts.js
import React, { useState, useEffect } from 'react';
import './OurProducts.css'; // Import the corresponding CSS file
import '../adoption/Adoption.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests
import '../frame56/Frame56.css'

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

    <div className="frame56-header">
        <div className="header-text">
          <h3 className="sub-heading">Hard to choose right products for your pets?</h3>
          <h2 className="main-heading">Our Products</h2>
        </div>
        <button className="view-more-btn">View more →</button>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className='detail'>
              <div className='firsthalf'>
                <h3>{product.name}</h3>
                <div className='produt-size'>
                  <p>
                    Product: {product.product}
                    {product.size && <span> &middot; Size: {product.size}</span>}
                  </p>
                </div>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-gift">{product.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
