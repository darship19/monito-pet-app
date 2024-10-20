import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Pagination } from "swiper/modules"; // Correct way to import Pagination in v9+
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Swiper pagination styles
import "./Customers.css"; // Correct CSS import

const API_URL = "https://monitor-backend-rust.vercel.app/api/customers";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <div className="loading">Loading customers...</div>;
  }

  return (
    <div className="customer-container">
      <h2>Our Lovely Customers</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id}>
            <div className="customer-card">
              <img
                src={customer.image}
                alt={customer.name}
                className="customer-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customer;
