import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

// const getFoobar = () => {
// const FOOBAR = gql`
//    {
//       foobars {
//          foobar
//       }
//    }
// `;
// client.query({ query: FOOBAR }).then(data => console.log(data));
// };

export const addFoobar = title => {
   const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
         uri: 'http://localhost:4000/'
      })
   });

   const FOOBAR_MUTATION = gql`
      mutation createFoobar($foobar: String) {
         createFoobar(foobar: $foobar)
      }
   `;

   client.mutate({
      mutation: FOOBAR_MUTATION,
      variables: { foobar: title }
   });
};
