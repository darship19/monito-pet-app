import React, { useState, useEffect } from 'react';
import './Frame1.css';
import Filter from '../filter/filter';
import axios from 'axios'; // Import axios for API calls
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Frame1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredDogs, setFilteredDogs] = useState([]); // To store filtered results
  const [dogsData, setDogsData] = useState([]); // State to store the fetched pets data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const cardsPerPage = 9;
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch data from the More Puppies API
    axios.get('https://monitor-backend-rust.vercel.app/api/pets')
      .then((response) => {
        setDogsData(response.data);
        setFilteredDogs(response.data); // Set both the original and filtered data
        setLoading(false); // Turn off loading state
      })
      .catch((error) => {
        console.error("Error fetching pets data:", error);
        setError("Error fetching pets data.");
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(filteredDogs.length / cardsPerPage);

  // Pagination logic
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const selectedDogs = filteredDogs.slice(startIndex, startIndex + cardsPerPage);
    return selectedDogs.map((dog) => (
      <div 
        key={dog.id} 
        className="dog-card" 
        onClick={() => navigate('/product-details', { state: { dog } })} // Navigate on click
      >
        <img src={dog.image} alt={dog.breed} />
        <h3>{dog.id} - {dog.breed}</h3>
        <p className="info">Price: {dog.price.toLocaleString()}</p>
        <p className="info">Age: {dog.age}</p>
        <p className="info">Gender: {dog.gender}</p>
      </div>
    ));
  };

  // Filter application handler
  const applyFilters = (filters) => {
    let filtered = dogsData;

    // Apply gender filter
    if (filters.gender.length > 0) {
      filtered = filtered.filter((dog) => filters.gender.includes(dog.gender));
    }

    // Apply color filter
    if (filters.color.length > 0) {
      filtered = filtered.filter((dog) => filters.color.includes(dog.color));
    }

    // Apply price filter
    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter((dog) => {
        const price = dog.price;
        const minCondition = filters.minPrice ? price >= filters.minPrice : true;
        const maxCondition = filters.maxPrice ? price <= filters.maxPrice : true;
        return minCondition && maxCondition;
      });
    }

    // Apply breed filter
    if (filters.breed.length > 0) {
      filtered = filtered.filter((dog) => filters.breed.includes(dog.breed.split(" ")[0])); // Example: matching breed name
    }

    setFilteredDogs(filtered);
    setCurrentPage(1); // Reset to page 1 after filtering
  };

  if (loading) return <div>Loading dogs...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error if occurred

  return (
    <div className="frame1-container">
      {/* Filter Section */}
      <div className="filter-section">
        <Filter applyFilters={applyFilters} />
      </div>

      {/* Dog Cards Section */}
      <div className="dog-cards-section">
        <div className="dog-cards-grid">
          {renderCards()}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={handlePrevious} disabled={currentPage === 1}>←</button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? 'active' : ''}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={handleNext} disabled={currentPage === totalPages}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
