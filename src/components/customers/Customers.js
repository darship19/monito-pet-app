import React, { useEffect, useState } from 'react';
import './Customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);  // Added a loading state

  useEffect(() => {
    // Fetching customer data from the API
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/customers');
        const data = await response.json();
        if (data && data.customers) {
          setCustomers(data.customers);  // Ensure the customers array is defined
        }
      } catch (error) {
        console.error('Error fetching customer data:', error);
      } finally {
        setLoading(false);  // Turn off the loading state once the data is fetched
      }
    };

    fetchCustomers();
  }, []);

  // Handler to move the carousel
  const goToNextSlide = () => {
    if (customers.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
    }
  };

  const goToPrevSlide = () => {
    if (customers.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + customers.length) % customers.length);
    }
  };

  if (loading) {
    return <div>Loading...</div>;  // Display loading text until the data is fetched
  }

  return (
    <div className="customers-container">
      <h2>Our Lovely Customers</h2>
      
      {customers.length > 0 ? (
        <div className="carousel-container">
          {/* Previous Button */}
          <button className="prev-btn" onClick={goToPrevSlide}>◀</button>
          
          {/* Main Customer Display */}
          <div className="carousel-slide">
            {customers.slice(currentIndex, currentIndex + 3).map((customer, index) => (
              <div className="customer-card" key={index}>
                <img src={customer.image} alt={customer.name} className="customer-img" />
              </div>
            ))}
          </div>
          
          {/* Next Button */}
          <button className="next-btn" onClick={goToNextSlide}>▶</button>
        </div>
      ) : (
        <div>No customers to display</div>
      )}
      
      {/* Pagination Dots */}
      {customers.length > 0 && (
        <div className="pagination">
          {customers.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Customers;
