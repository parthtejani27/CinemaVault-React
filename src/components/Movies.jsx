import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import Pagination from "./Pagination";
const Movies = ({ handleAddToWatchList, handleRemoveWatchList, watchList }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handleBack = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleFWD = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    // <div>
    //     <div className='text-2xl font-bold text-center p-3 m-5'>Trending Movies</div>
    //     <div className='flex flex-row flex-wrap justify-around' >
    //         {
    //             movies.map((movieObj)=>{
    //                 return <MoviesCard watchList={watchList} key={movieObj.id} props={movieObj} handleAddToWatchList={handleAddToWatchList} handleRemoveWatchList={handleRemoveWatchList}/>
    //             })
    //         }
    //     </div>
    //     <Pagination handleBack={handleBack} handleFWD={handleFWD} pageNo={pageNo} />
    // </div>

    <div>
      <div className="text-2xl font-bold text-center p-3 m-5">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {movies.map((movieObj) => {
          return (
            <MoviesCard
              watchList={watchList}
              key={movieObj.id}
              props={movieObj}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveWatchList={handleRemoveWatchList}
            />
          );
        })}
        {/* Add invisible items to maintain spacing */}
        {/* <div className="w-[calc(25%-1rem)] invisible"></div>
        <div className="w-[calc(25%-1rem)] invisible"></div>
        <div className="w-[calc(25%-1rem)] invisible"></div> */}
      </div>
      <Pagination
        handleBack={handleBack}
        handleFWD={handleFWD}
        pageNo={pageNo}
      />
    </div>
  );
};

export default Movies;
