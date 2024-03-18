import React from 'react';
import logo from '../MovieLogo.png';
import { Link } from 'react-router-dom';

function Navibar() {
  return (
    <div className='p-1 items-center flex space-x-12 > *'>
        <img className='w-[60px]'  src={logo}/>
        <Link to='/' className='font-bold text-blue-500 text-xl'>Movies</Link>
        <Link to='/Watchlist' className='font-bold text-blue-500 text-xl'>Watchlist</Link>
    </div>
  )
}

export default Navibar