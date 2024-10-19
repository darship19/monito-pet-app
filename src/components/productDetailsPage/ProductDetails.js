import React from 'react';
import { useLocation } from 'react-router-dom';
import FullDetails from '../fulldetail/FullDetails';
import Customers from '../customers/Customers';

const ProductDetails = () => {
  const location = useLocation();
  const { dog } = location.state; // Retrieve the dog data from state

  return (
    <div>
    <FullDetails/>
    <Customers />
    </div>
  );
};

export default ProductDetails;
