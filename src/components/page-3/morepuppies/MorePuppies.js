import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MorePuppies.css';

const MorePuppies = () => {
  const [puppies, setPuppies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPuppies = async () => {
      try {
        const response = await axios.get('https://monitor-backend-rust.vercel.app/api/pets'); // replace with actual URL
        console.log(response.data);
        setPuppies(response.data.slice(0, 4)); // only show the first 4 puppies
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch puppy data.');
        setLoading(false);
      }
    };

    fetchPuppies();
  }, []);

  if (loading) {
    return <p>Loading puppies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="over-all">
      <section className="puppies-section">
        <div className="puppies-header">
          <h2>What's new?</h2>
          {/* Link remains below */}
          <a href="/category" className="see-more-link">See More Puppies</a>
        </div>
        <div className="puppies-grid">
          {puppies.map((puppy) => (
            <div key={puppy.id} className="puppy-card">
              <img src={puppy.image} alt={puppy.name} className="puppy-image" />
              <div className="puppy-details">
                <h3>{puppy.id} - {puppy.breed}</h3>
                <p><strong>Gender:</strong> {puppy.gender}</p>
                <p><strong>Age:</strong> {puppy.age}</p>
                <p className="puppy-price">{puppy.price} VND</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MorePuppies;
