import React from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import TrendingMovies from "./TrendingMovies";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/"
  })
});

const DataComponent = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>
        Trending movies
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <TrendingMovies />
    </div>
  </ApolloProvider>
);

export default DataComponent;
