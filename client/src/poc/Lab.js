import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

const FOOBAR = gql`
   {
      foobars {
         foobar
      }
   }
`;

const FOOBAR_MUTATION = gql`
   mutation createFoobar($foobar: String) {
      createFoobar(foobar: $foobar)
   }
`;

const TrendingMovies = () => {
   const { loading, error, data } = useQuery(FOOBAR);
   const [addFoobar] = useMutation(FOOBAR_MUTATION);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;

   const addToDB = () => {
      addFoobar({ variables: { foobar: 'hej' } });
   };

   return (
      <div>
         <br />
         <br />
         <button onClick={() => addToDB()}>mutate</button>
         <br />
         <br />
         <br />
         {data.foobars.map((item, index) => (
            <div key={`foobar_${index}`}>{item.foobar}</div>
         ))}
      </div>
   );
};

export default TrendingMovies;
