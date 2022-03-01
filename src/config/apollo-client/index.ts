import { ApolloClient, InMemoryCache } from '@apollo/client';
import { URI } from '../../utils/contants';

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

export default client;
