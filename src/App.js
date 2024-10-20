import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import PetSellers from './components/homepage/petSellers/PetSellers';
import Frame56 from './components/homepage/frame56/Frame56';
import OurProducts from './components/homepage/ourProducts/OurProducts';
import Banner from './components/homepage/banner/Banner';
import OurPets from './components/homepage/ourpets/OurPets';
import Header from './components/homepage/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/Page-2/category/Category'; 
import ProductDetails from './components/page-3/productDetailsPage/ProductDetails';
import Contact from './components/contact/Contact';
import Adoption from './components/homepage/adoption/Adoption';

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
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
