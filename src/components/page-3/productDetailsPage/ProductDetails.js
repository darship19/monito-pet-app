import React from 'react';
import { useLocation } from 'react-router-dom';
import FullDetails from '../fulldetail/FullDetails';
import Customers from '../customers/Customers';
import MorePuppies from '../morepuppies/MorePuppies';

const ProductDetails = () => {
  const location = useLocation();
  const { dog } = location.state; // Retrieve the dog data from state

  return (
    <div>
    <FullDetails/>
    <Customers />
    <MorePuppies/>
    </div>
  );
};

export default ProductDetails;
