import React from "react";
import NewsItem from "./news-item";
import { Link } from "react-router-dom";

const Movies = props => {
    const { movies } = props;
  return (
    <div className="container">
      <div className="row mt-5">
      <div className="col-12">
        <h2>List of movies:</h2>
      </div>
        {movies.map(res => (
          <div key={res.id} className="col-md-3">
            <Link to={{ pathname: `/movie-details/${res.id}` }}>
              <NewsItem movies={res} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;