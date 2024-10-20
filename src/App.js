import Navbar  from './navbar/Navbar';
import React from 'react';
import PetSellers from './components/petSellers/PetSellers';
import Footer from './components/footer/Footer';
import Frame56 from './components/frame56/Frame56';
import OurProducts from './components/ourProducts/OurProducts';
import Banner from './components/banner/Banner';
import OurPets from './components/OurPets';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/category/Category'; // Import the new Category component
import ProductDetails from './components/productDetailsPage/ProductDetails';
import Contact from './components/contact/Contact';
import Adoption from './components/adoption/Adoption';
import './App.css'; // or './App.css' depending on your structure


function App() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <OurPets />
                  <Banner />
                  <OurProducts />
                  <PetSellers />
                  <Adoption />
                  <Frame56 />
                </>
              } />
              <Route path="/category" element={<Category />} />
              <Route path="/product-details" element={<ProductDetails />} />
              {/* Add other routes if necessary */}
              <Route path="/contact" element={<Contact />} /> {/* Contact route */}

            </Routes>
            <Footer />
          </div>
        </Router>
      );


}

export default App;
