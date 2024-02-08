import React, { useState } from 'react';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundName, setFoundName] = useState(null);

  const namesList = ['John', 'Jane', 'Doe', 'Alice']; // Example list of names

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setFoundName(null); // Reset found name when input changes
  };

  const searchName = () => {
    const found = namesList.find(name => name.toLowerCase() === searchQuery.toLowerCase());
    setFoundName(found);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Type a name..." 
        value={searchQuery} 
        onChange={handleInputChange} 
      />
      <button onClick={searchName}>Search</button>
      {foundName && <p>Found: {foundName}</p>}
    </div>
  );
};

export default SearchBox;
