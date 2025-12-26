import React from 'react';

const subwayOptions = [
    {
      name: 'Арбатская',
      code: 'Arbat',
    },
    {
      name: 'Александровский сад',
      code: 'Alexanders Garden',
    },
    {
      name: 'Московская',
      code: 'Moscow',
    },
    {
      name: 'Парк Культуры',
      code: 'Culture',
    },
    {
      name: 'Театральная',
      code: 'Theatr', // в данных subwayCode называется Theatr
    },
  ];

export default function FilterCafes({ selectedSubway, onSubwayChange }) {

  const handleChange = (e) => {
    onSubwayChange?.(e.target.value);
  };

  return (
    <div className="controls">
      <select
        name="subway"
        id="subway"
        value={selectedSubway}
        onChange={handleChange}
      >
        <option value="All">Все</option>
        {subwayOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};