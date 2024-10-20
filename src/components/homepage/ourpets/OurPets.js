// src/components/OurPets.js
import React, { useEffect, useState } from 'react';
import './OurPets.css';
import '../frame56/Frame56.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls

const OurPets = () => {
  const [petsData, setPetsData] = useState([]); // State to store pets data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch pets data from the API when the component mounts
    axios.get('https://monitor-backend-rust.vercel.app/api/pets')
      .then((response) => {
        setPetsData(response.data); // Set the fetched data into state
        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error("Error fetching pets data:", error);
        setError("Error fetching pets data.");
        setLoading(false); // Stop loading even if there’s an error
      });
  }, []); // Run this effect once on mount

  const handleViewMore = () => {
    navigate('/category'); // Navigate to the Category page
  };

  if (loading) return <div>Loading pets...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error if occurred

  return (
    <div className="our-pets">
    <div className="frame56-header">
      <div className="header-text">
        <h3 className="sub-heading">What's new?</h3>
        <h2 className="main-heading">Take A Look At Some Of Our Pets</h2>
      </div>
      <button className="view-more" onClick={handleViewMore}>
        View more
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </div>
  
    <div className="pets-container">
      {petsData.map((pet) => (
        <div className="pet-card" key={pet.id}>
          <img src={pet.image} alt={pet.breed} />
          <div className="pet-info">
            <h3>{pet.id} - {pet.breed}</h3>
            <p>Gender: {pet.gender}</p>
            <p>Age: {pet.age}</p>
            <p>{pet.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default OurPets;
