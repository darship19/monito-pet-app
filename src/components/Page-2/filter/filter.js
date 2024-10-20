// src/components/filter/filter.js
import React, { useState } from "react";
import "./filter.css";

const Filter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    minPrice: "",
    maxPrice: "",
    breed: []
  });

  const handleCheckboxChange = (event, filterKey) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      const updatedFilter = checked
        ? [...prevFilters[filterKey], value]
        : prevFilters[filterKey].filter((item) => item !== value);
      return { ...prevFilters, [filterKey]: updatedFilter };
    });
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = () => {
    applyFilters(filters); // Pass filters to parent component
  };

  return (
    <div className="filter-container">
      <div className="filter-title">Filter</div>

      <div className="filter-section">
        <h4>Gender</h4>
        <label>
          <input
            type="checkbox"
            value="Male"
            onChange={(e) => handleCheckboxChange(e, "gender")}
          />
          Male
        </label>
        <label>
          <input
            type="checkbox"
            value="Female"
            onChange={(e) => handleCheckboxChange(e, "gender")}
          />
          Female
        </label>
      </div>

      <div className="filter-section filter-color">
        <h4>Color</h4>
        <label>
          <input
            type="checkbox"
            value="Red"
            onChange={(e) => handleCheckboxChange(e, "color")}
          />
          <span className="color-circle color-red"></span> Red
        </label>
        <label>
          <input
            type="checkbox"
            value="Apricot"
            onChange={(e) => handleCheckboxChange(e, "color")}
          />
          <span className="color-circle color-apricot"></span> Apricot
        </label>
        <label>
          <input
            type="checkbox"
            value="Black"
            onChange={(e) => handleCheckboxChange(e, "color")}
          />
          <span className="color-circle color-black"></span> Black
        </label>
        <label>
          <input
            type="checkbox"
            value="Black & White"
            onChange={(e) => handleCheckboxChange(e, "color")}
          />
          <span className="color-circle color-black-white"></span> Black & White
        </label>
        <label>
          <input
            type="checkbox"
            value="Silver"
            onChange={(e) => handleCheckboxChange(e, "color")}
          />
          <span className="color-circle color-silver"></span> Silver
        </label>
        <label>
          <input
            type="checkbox"
            value="Tan"
            onChange={(e) => handleCheckboxChange(e, "color")}
          />
          <span className="color-circle color-tan"></span> Tan
        </label>
      </div>

      <div className="filter-section filter-price">
        <h4>Price</h4>
        <input
          type="number"
          name="minPrice"
          placeholder="Min"
          value={filters.minPrice}
          onChange={handlePriceChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max"
          value={filters.maxPrice}
          onChange={handlePriceChange}
        />
      </div>

      <div className="filter-section filter-breed">
        <h4>Breed</h4>
        <label>
          <input
            type="checkbox"
            value="Small"
            onChange={(e) => handleCheckboxChange(e, "breed")}
          />
          Small
        </label>
        <label>
          <input
            type="checkbox"
            value="Medium"
            onChange={(e) => handleCheckboxChange(e, "breed")}
          />
          Medium
        </label>
        <label>
          <input
            type="checkbox"
            value="Large"
            onChange={(e) => handleCheckboxChange(e, "breed")}
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default Filter;
