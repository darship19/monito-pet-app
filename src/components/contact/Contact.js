// src/components/contact/Contact.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Add any specific CSS for the contact page

const Contact = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch customers data when the component loads
    axios.get('https://monitor-backend-rust.vercel.app/api/customers')
      .then((response) => {
        setCustomers(response.data); // Set the fetched data into the state
        setLoading(false); // Stop the loading indicator
      })
      .catch((error) => {
        setError("Error fetching customer data");
        setLoading(false);
      });
  }, []); // Empty array means this effect runs once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>For inquiries, reach out to one of our customer representatives below:</p>
      <div className="customer-list">
        {customers.map((customer, index) => (
          <div key={index} className="customer-card">
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
