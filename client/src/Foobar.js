import React, { Component } from "react";
import PropTypes from "prop-types";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { gql, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import DataFetch from "./DataFetch";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    //  uri: 'https://48p1r2roz4.sse.codesandbox.io',
    uri: "http://localhost:4000/"
  })
});

client
  .query({
    query: gql`
      {
        books {
          title
          author
        }
      }
    `
  })
  .then(result => console.log(result));

const Foobar = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DataFetch />
    </div>
  </ApolloProvider>
);

export default Foobar;
