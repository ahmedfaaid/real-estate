import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_REAL_ESTATE_API
      : 'http://localhost:4000/graphql'
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
