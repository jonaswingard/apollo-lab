import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

export const loadTags = async () => {
   const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
         uri: 'http://localhost:4000/'
      })
   });

   const TAGS = gql`
      {
         tags {
            title
            id
         }
      }
   `;

   const tags = await client.query({ query: TAGS });
   return tags.data;
};

export const deleteTag = async id => {
   const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
         uri: 'http://localhost:4000/'
      })
   });

   const DELETE_TAG = gql`
      mutation deleteTag($id: ID!) {
         deleteTag(id: $id)
      }
   `;

   return await client.mutate({
      mutation: DELETE_TAG,
      variables: { id: id }
   });
};
