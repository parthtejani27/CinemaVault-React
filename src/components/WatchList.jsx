import React, { useEffect, useState } from "react";
import genreids from "../utility/genre"
const WatchList = ({ watchList ,setWatchList,handleRemoveWatchList}) => {
  const [search, setSearch] = useState("");
  const [genrelist,setGenreList]=useState(["All Genres"])
  const [currentGenre,setCurrentGenre] = useState("All Genres")

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortInc = ()=>{
    let sorted = watchList.sort((movieObjA,movieObjB)=>{
      return movieObjA.vote_average-movieObjB.vote_average
    })

    setWatchList([...sorted])
  }

  const sortDec = ()=>{
    let sorted =watchList.sort((movieObjA,movieObjB)=>{
      return movieObjB.vote_average-movieObjA.vote_average
    })

    setWatchList([...sorted])

  }

  useEffect(()=>{
    let temp = watchList.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(["All Genres",...temp])
  },[watchList])

  const handleFilter = (genre)=>{
    setCurrentGenre(genre)
  }

  return (
    <>
      <div className="flex justify-center flex-wrap">
        {genrelist.map((genre)=>{
          return <div key={genre} onClick={()=>handleFilter(genre)} className={currentGenre==genre?"border-slate-900 border-2 m-2 flex font-bold justify-center h-[3rem] w-[9rem] rounded-2xl text-black items-center":"bg-gray-400 m-2 flex font-bold justify-center h-[3rem] w-[9rem] rounded-2xl text-white items-center"}>
          {genre}
        </div>
        })}
        
      </div>

      <div className="flex justify-end my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search..."
          className="p-2 h-[3rem] w-[18rem] bg-gray-200 outline-none rounded-2xl	"
        />
      </div>

      <div className="overplow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2 cursor-pointer" onClick={sortInc}>
                  <i class="fa-solid fa-up-long"></i>
                </div>
                <div className="p-2">
                  Rating
                </div>
                <div className="p-2 cursor-pointer" onClick={sortDec}>
                  <i class="fa-solid fa-down-long"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
              if(currentGenre=='All Genres'){
                return true
              }else{
                return genreids[movieObj.genre_ids[0]]==currentGenre
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <>
                    <tr>
                      <td className="flex items-center px-6 py-4">
                        <img
                          className="h-[7rem] w-[6rem]"
                          src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movieObj.poster_path}`}
                          alt=""
                        />
                        <div className="mx-10">{movieObj.title}</div>
                      </td>
                      <td>{movieObj.vote_average}</td>
                      <td>{movieObj.popularity}</td>
                      <td>
                        {genreids[movieObj.genre_ids[0]]}
                      </td>
                      <td className="text-red-800 cursor-pointer" onClick={()=>handleRemoveWatchList(movieObj)}>Delete</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
