import React from "react";
import { useQuery, gql } from "@apollo/client";

const BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

const DataFetch = props => {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {author}: {title}
      </p>
    </div>
  ));
};

export default DataFetch;
