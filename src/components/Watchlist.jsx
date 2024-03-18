import React, { useContext, useState } from 'react';
import { movieContext } from './movieContext';
import genreids from './generes';

function Watchlist({movieObj}) {
  const {watchlist,setWatchlist,DeleteFromWL}=useContext(movieContext)
  const [search,setSearch]=useState("")
  const HandleSearch=(e)=>{
        setSearch(e.target.value)
  }

  return (
    <>
    <div className='w-full flex justify-center py-4'>
      <input onChange={HandleSearch} value={search} placeholder='search movies' 
      className='justify-center w-[20vw] border-2 border-gray-600 p-1 bg-gray-300 rounded-md'></input>
    </div>
    <div className='p-4'>
    <table className='w-full text-center'>
      <thead className='bg-gray-200 border'>
      <tr>
        <th>Name</th>
         <th>Genere</th>
         <th>Rating</th>
         <th>Popularity</th>
         <th>Delete Movies</th>
     </tr>
     </thead>
     <tbody>
      {watchlist.filter((movieObj)=>(
        movieObj.title.toLowerCase().includes(search.toLowerCase())
      ))
      .map((movieObj) => (
      <tr className='border-2'>
        <td className='flex text-center'><img className='w-[8vh] m-2' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}>
          </img><div className='m-4'>{movieObj.title}</div></td>
        <td>{genreids[movieObj.genre_ids[0]]}</td>
        <td>{movieObj.vote_average}</td>
        <td>{movieObj.popularity}</td>
        <td onClick={()=>DeleteFromWL(movieObj)} className='text-red-600 font-bold'>Delete</td>
      </tr>
           ))}
      
      
     </tbody>
    </table>
    </div>
    </>
  )
}

export default Watchlist