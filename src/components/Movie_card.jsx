import React, { useContext } from 'react'
import { movieContext } from './movieContext'
import Watchlist from './Watchlist';
import { Link } from 'react-router-dom';


function Movie_card({movieObject}) {
  const myContext=useContext(movieContext)
  
  function containInWL(){
    for (let i=0; i<myContext.watchlist.length; i++){
      if (myContext.watchlist[i].id===movieObject.id){
        return true;
      }
    }
      return false;
  }
  return (
    
    <div  className='w-[30vh] h-[50vh] border-2 my-5 rounded-xl bg-cover bg-center flex justify-center items-end hover:scale-110 duration-300'
     style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`}}>
      {containInWL(movieObject)?(
      <div className='absolute text-2xl ml-36 mb-60 pb-4'>&#10060;</div>
      ):( <div onClick={()=>myContext.AddToWatchList(movieObject)} 
          className='absolute text-2xl ml-36 mb-60 pb-4'>&#128525;</div>
      )}
       <div className='flex flex-col items-center justify-center'><div className='w-full text-white  text-center p-2 bg-gray-800/70 rounded-xl'>{movieObject.title}</div>
        <Link to={`/details/${movieObject.id}`} ><i class="fa-solid fa-circle-info text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"></i></Link>
</div>
    </div>
  
  )

}
export default Movie_card