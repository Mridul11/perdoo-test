import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { AppApolloClient, AppRouter } from './config';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={AppApolloClient}>
      <AppRouter />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
