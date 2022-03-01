import { ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppApolloClient } from '..';
import { Navbar } from '../../components';
import { Homepage, Detailspage } from '../../pages';
import AppContext from '../context';

const AppRouter = () => {
  const navbarAppState: [string, React.Dispatch<React.SetStateAction<string>>] =
    useState('character');
  const locationsAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = useState([]);
  const episodesAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = useState([]);
  const charactersAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = useState([]);
  return (
    <ApolloProvider client={AppApolloClient}>
      <AppContext.Provider
        value={{ navbarAppState, locationsAppState, episodesAppState, charactersAppState }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<Detailspage />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </ApolloProvider>
  );
};

export default AppRouter;
