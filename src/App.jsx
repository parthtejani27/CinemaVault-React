import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
// import Body from "./components/Body";
function App() {
  let [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movieobj) => {
    let newWatchList = [...watchList, movieobj];
    localStorage.setItem("MoviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(watchList);
  };

  const handleRemoveWatchList = (movieobj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieobj.id;
    });
    localStorage.setItem("MoviesApp", JSON.stringify(filteredWatchList));

    setWatchList(filteredWatchList);
    console.log("watchList", watchList);
  };

  useEffect(() => {
    let moviesfrommylocalstorage = localStorage.getItem("MoviesApp");
    console.log("local", moviesfrommylocalstorage);
    if (!moviesfrommylocalstorage) {
      return;
    } else {
      setWatchList(JSON.parse(moviesfrommylocalstorage));
    }
  }, []);

  return (
    // <main>
    //   <Body/>
    // </main>
    <main>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveWatchList={handleRemoveWatchList}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveWatchList={handleRemoveWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <video
        preload="none"
        crossorigin="anonymous"
        src="blob:https://inuit309piqu.com/5ad46d6c-1cc0-4f4e-a34e-cfe56e1c0a3f"
        x-webkit-airplay="allow"
        disableremoteplayback="true"
        pip="false"
      ></video> */}
    </main>
  );
}

export default App;
