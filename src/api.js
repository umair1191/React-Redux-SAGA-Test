// get a movie info
export const fetchaMovie = async id => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?language=en-US&api_key=06aa50e38281dd9b38543df33f8bab2c"
  );
  const data = respone.json();
  if (respone.status > 400) {
    throw new Error(respone.status);
  }

  return data;
};

export const fetchMovies = async page => {
  const respone = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=64f4e75ab35b613174c32a91fe3230d9"
  );
  const data = respone.json();
  if (respone.status > 400) {
    throw new Error(data.error);
  }

  return data;
};
