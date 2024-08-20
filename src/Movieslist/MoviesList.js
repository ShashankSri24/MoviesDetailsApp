import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movie_name, rel_date, id, banner }) => {
  return (
    <>
      <Link to={"/details/" + id}>
        <div className="content">
          <div className="img-div">
            <img
              width={"100%"}
              src={"https://image.tmdb.org/t/p/original/" + banner}
              alt="img"
            />
          </div>
          <h3 className="title">{movie_name}</h3>
          <div className="rel-date">{rel_date}</div>
        </div>
      </Link>
    </>
  );
};
export default MoviesList;
