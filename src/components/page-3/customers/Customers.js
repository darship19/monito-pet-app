import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customers.css';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch customer data from the API when the component mounts
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/customers');
        setCustomers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch customer data.');
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return <p>Loading customers...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="customer-section">
      <h2>Our Lovely Customer</h2>
      <div className="customer-carousel">
        {customers.map((customer, index) => (
          <div
            key={customer.id}
            className={`customer-card ${
              currentIndex === index ? 'active-slide' : ''
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 0.5s ease'
            }}
          >
            <img src={customer.image} alt={customer.name} />
          </div>
        ))}
      </div>
      <div className="dot-container">
        {customers.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Customer;
