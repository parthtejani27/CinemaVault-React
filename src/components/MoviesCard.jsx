import React from "react";

const MoviesCard = ({
  props,
  handleAddToWatchList,
  handleRemoveWatchList,
  watchList,
}) => {
  const doesContain = (props) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == props.id) return true;
    }
    return false;
  };

  return (
    <div
      className="h-[40vh] w-[15%] bg-center bg-cover rounded-xl hover:scale-110 hover:cursor-pointer m-2 flex flex-col items-end justify-between"
      style={{
        // eslint-disable-next-line react/prop-types
        backgroundImage: `url(https://media.themoviedb.org/t/p/w440_and_h660_face${props.poster_path})`,
      }}
    >
      {doesContain(props) ? (
        <div
          onClick={() => handleRemoveWatchList(props)}
          className="m-2 bg-slate-800 text-white h-10 w-10 flex justify-center items-center rounded-xl"
        >
          <i class="fa-solid fa-heart"></i>
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(props)}
          className="m-2 bg-slate-800 text-white h-10 w-10 flex justify-center items-center rounded-xl"
        >
          <i className="" class="fa-regular fa-heart"></i>
        </div>
      )}
      <div className="text-white text-xl w-full p-2 text-center bg-black-200">
        {props.title}
      </div>
    </div>
  );
};

export default MoviesCard;
