import React from "react";
import { useQuery, gql } from "@apollo/client";

const TRENDING_MOVIES = gql`
  {
    trendingMovies {
      title
      release_date
      backdrop_path
    }
  }
`;

const TrendingMovies = () => {
  const { loading, error, data } = useQuery(TRENDING_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.trendingMovies.map(({ title, backdrop_path }) => (
    <div key={title}>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title}
        width="200"
      ></img>
      <p>{title}</p>
    </div>
  ));
};

export default TrendingMovies;
