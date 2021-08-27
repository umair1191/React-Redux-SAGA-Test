import React from "react";
import { Link } from "react-router-dom";
import { minutesToHms } from "../functions/functions";

const SingleMovie = ({ movieinfo }) => {
  return (
    <div className="row mt-5">
      <div className="col-12 detail-page-nav">
        <h1>Movie Deatil Page</h1>
        <Link to={{ pathname: `/` }}>
          <button type="button" className="btn btn-primary ">
            Back
          </button>
        </Link>
      </div>
      <div className="col-2 mt-5">
        <img
          src={"https://image.tmdb.org/t/p/w300" + movieinfo.poster_path}
          style={{ width: "100%" }}
          alt={movieinfo.title}
        />
      </div>

      <div className="col-10  mt-5">
        <h2>{movieinfo.title}</h2>
        <span>
          <i>{movieinfo.tagline}</i>
        </span>
        <div>
          Realease date : {movieinfo.release_date}
          <br />
          Types :
          {movieinfo.genres
            ? movieinfo.genres.map((item, i) => (
                <span key={i}>{item.name} </span>
              ))
            : ""}
          <br />
          Duration: {minutesToHms(movieinfo.runtime)}
        </div>
        <p>{movieinfo.overview}</p>
      </div>
    </div>
  );
};

export default SingleMovie;
