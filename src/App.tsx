import './App.css';
import { Homepage } from './pages';
import { Loader } from './components';
import { GET_CHARACTERS } from './utils/queries';
import { ApolloProvider, useQuery } from '@apollo/client';
import { AppApolloClient, AppRouter } from './config';

function App() {
  // const { loading, data, error } = useQuery(GET_CHARACTERS);
  // console.log(loading, data, error);

  return (
    <div className="App">
      <ApolloProvider client={AppApolloClient}>
        <AppRouter />
      </ApolloProvider>
    </div>
  );
}

export default App;
