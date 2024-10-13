import React from 'react';
import './Offers.css'; // Assuming you have some CSS for styling

const Offers = () => {
  const offers = [
    {
      title: "Weekend Special Offer",
      description: "Book a room for 2 nights and get 1 night free. Includes complimentary breakfast and free Wi-Fi.",
      price: "₹2,999/night",
      validity: "Valid till 31st October 2024"
    },
    {
      title: "Family Package",
      description: "Enjoy a 3-night stay for the whole family with complimentary dinner and free access to our rooftop pool.",
      price: "₹7,999 for 3 nights",
      validity: "Valid for the holiday season"
    },
    {
      title: "Corporate Stay",
      description: "For business travelers, get 10% off on a minimum stay of 2 nights. Includes free airport transfers.",
      price: "₹2,499/night",
      validity: "Valid till December 2024"
    }
  ];

  return (
    <div className="offers-container">
      <h2>Sampath Residency - Special Offers</h2>
      <div className="offers-list">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p><strong>Price:</strong> {offer.price}</p>
            <p><strong>Validity:</strong> {offer.validity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
