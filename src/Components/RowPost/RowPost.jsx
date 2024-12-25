import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import { imageURL, API_KEY } from "../../constants/constants";
import "./RowPost.css";

function RowPost(props) {
  const [movies, setmovies] = useState([]);
  const [UrlId, setUrlId] = useState('')
  const { url = "" } = props;
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      //   console.log(response.data.results);
      setmovies(response.data.results);
    });
  }, [url]);

  const handleMovies = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log(response.data.results[0]);
        console.log("Trailer Not Available");
      }
    })
  };

  return (
    <div className="row ">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovies(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageURL + obj.backdrop_path}`}
            alt="posters"
          />
        ))}
      </div>
      {UrlId && <YouTube videoId={UrlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
