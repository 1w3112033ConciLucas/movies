import React from "react";
import classNames from "classnames";
import TMDBImage from "../TMDBImage";
import "./MoviesList.css";

const MovieListItem = ({ movie, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(movie);
  };
  return (
    <div
      className={classNames("movie-list-item", { selected: isSelected })}
      onClick={handleClick}
    >
      <div className="pelicula">
        <TMDBImage src={movie.poster_path} className="poster" />
        <h3 className="titulo">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieListItem;