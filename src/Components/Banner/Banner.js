import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imageURL } from "../../constants/constants";
import axios from "../../axios";

function Banner() {
  const [movie, setmovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[Math.floor(Math.random() * 20) + 1]);
        setmovie(response.data.results[Math.floor(Math.random() * 20) + 1]);
      });
  }, []);
  return (
    <div style={{backgroundImage:`url(${movie?imageURL+movie.backdrop_path:"No Movies"})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie?movie.title:"No Movies"}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="discription">
         {movie?movie.overview.substring(0,400):"No Movie"}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
