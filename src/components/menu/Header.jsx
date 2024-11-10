import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isBorder, setIsBorder] = useState(false);

  const handleMenuClick = () => {
    setIsBorder(true); // Show border on outer div when clicked
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevents the outer div's click event
    setIsBorder(false); // Hide border when input is clicked
  };

  return (
    <div className='flex justify-center'>
      <h1 className='m-3'>Logo</h1>
      
      <div
        onClick={handleMenuClick}
        style={{ border: isBorder ? '2px solid black' : 'none' }}
        className='flex justify-center items-center mt-2 p-2'
      >
        <div className='m-2'>
          <FaSearch />
        </div>
        
        <input
          onClick={handleInputClick}
          type='text'
          className='border-none ml-2 outline-none' // outline-none hides input focus border
          placeholder='Enter the movie to search'
        />
      </div>
    </div>
  );
};

export default Header;
