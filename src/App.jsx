import React, { useEffect, useState } from 'react';
import Navibar from './components/Navibar';
import Banner from './components/Banner';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Watchlist from './components/Watchlist';
import Movies from "./components/Movies";

import { movieContext } from './components/movieContext';
import Movie_details from './components/Movie_details';


function App() {
  const [watchlist,setWatchlist]=useState([])
  const AddToWatchList=(movieObj)=>{
          let updatedWatchList=[...watchlist,movieObj]
          setWatchlist(updatedWatchList)
          localStorage.setItem("movies",JSON.stringify(watchlist));
          console.log(updatedWatchList)
  }
   const DeleteFromWL=(movieObj)=>{
      let filteredMovies=watchlist.filter((movie)=>{
         return movieObj.id!=movie.id
      })
         setWatchlist(filteredMovies)
         localStorage.setItem("movies",JSON.stringify(filteredMovies))

   }
  useEffect(()=>{
      let moviesInLocal=localStorage.getItem("movies")
      if(!moviesInLocal){
        return
      }
      setWatchlist(JSON.parse(moviesInLocal))
  },[])

  return (
    <>
<BrowserRouter>
<movieContext.Provider value={{AddToWatchList, watchlist, setWatchlist,DeleteFromWL}}>
<Navibar/>
<Routes>
      <Route path='/'  element={<><Banner/><Movies/></>}/>
      {/* // element={<><Banner/> <Movies/> </>}  */}
      
      <Route path='/Watchlist' element={<><Watchlist/> </>}/>
      <Route path='/details/:id' element={<><Movie_details/></>}/>
      </Routes>
      </movieContext.Provider>
      </BrowserRouter>
      
      </>
  )
}

export default App;
