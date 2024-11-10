import React from 'react'
import Header from './Header';


const Menu =()=> {
  return (
    <div>
      <Header/>
      <div className='flex justify-between items-center'>
        <h1>Movies</h1>
        <h1>Stream</h1>
        <h1>Events</h1>
        <h1>Plays</h1>
        <h1>Sports</h1>
        <h1>Activities</h1>

      </div>
    </div>
  )
}

export default Menu;
