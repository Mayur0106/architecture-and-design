import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConstactInfo.css'; // Import CSS for styling

function ConstactInfo() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/getCard');
      setCards(response.data.data); // Set cards to response.data.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Customer detailed</h2>
      <table>
        <thead>
          <tr>
            <th className="highlight">ID</th>
            <th className="highlight">Name</th>
            <th className="highlight">Phone Number</th>
            <th className="highlight">Address</th>
            <th className="highlight">Email</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(cards) && cards.length > 0 ? (
            cards.map((card) => (
              <tr key={card.id}>
                <td>{card.id}</td>
                <td>{card.name}</td>
                <td>{card.phone_number}</td>
                <td>{card.address}</td>
                <td>{card.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ConstactInfo;
