import React from "react";

const NewsItem = (props) => {
  const { movies } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h5>{movies.title}</h5>
      </div>
      <img
        src={"https://image.tmdb.org/t/p/w200" + movies.poster_path}
        className=""
        alt={movies.title}
      />
    </div>
  );
};

export default NewsItem;
