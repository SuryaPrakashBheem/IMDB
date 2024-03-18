import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie_card from './Movie_card';
import Pagination from './Pagination';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo,setPageNo] = useState(1);
  
  const handleNext=()=>{
    setPageNo(pageNo+1)
  };
  const handlePrevious=()=>{
    if (pageNo==1){
        setPageNo(pageNo)
    }
    else{
    setPageNo(pageNo-1)}
  };
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=28621d6bc616c6e9d3be9fb9b1a57509&language=en-US&page=${pageNo}`)
      .then(function (res) {
       setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <>
      <div>
        <div className='w-full text-center my-4 font-bold'>Trending Movies</div>
        <div className='flex gap-3 justify-evenly flex-wrap'>
          {movies.map((movieObj) => {
            return (<Movie_card 
              Name={movieObj.title} bgImage={movieObj.poster_path} movieObject={movieObj} 
              />)
          })}  
        </div>
        <Pagination Next={handleNext} Previous={handlePrevious} PageNumber={pageNo}/>
      </div>
    </>
  )
}

export default Movies;