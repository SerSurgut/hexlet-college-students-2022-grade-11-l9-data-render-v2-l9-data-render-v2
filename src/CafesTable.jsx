
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterCafes from './FilterCafes.jsx';

export default function CafesTable() {
  const [cafes, setCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState('All');

  useEffect(() => {
    axios.get('/cafes')
      .then((response) => {
        setCafes(response.data.cafes);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке кафе:', error);
      });
  }, []);

  const filteredCafes = selectedSubway === 'All'
    ? cafes
    : cafes.filter((cafe) => cafe.subwayCode === selectedSubway);

  return (
    <div className="cafesTable">
      <FilterCafes
        selectedSubway={selectedSubway}
        onSubwayChange={setSelectedSubway}
      />
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
          <li key={cafe.id} className="card">
            <img
              src={cafe.img || 'https://via.placeholder.com/150'}
              alt={cafe.name} 
            />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>	Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}