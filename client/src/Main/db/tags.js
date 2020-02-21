import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
   cache: new InMemoryCache(),
   link: new HttpLink({
      uri: 'http://localhost:4000/'
   })
});

export const loadTags = async () => {
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

export const upsertTag = async tag => {
   const UPSERT_TAG = gql`
      mutation upsertTag($title: String!, $id: ID) {
         upsertTag(tag: { title: $title, id: $id }) {
            success
         }
      }
   `;

   return await client.mutate({
      mutation: UPSERT_TAG,
      variables: { title: tag.title, id: tag.id }
   });
};
