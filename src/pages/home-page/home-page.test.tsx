import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import Homepage from './home-page';
import { AppContext } from '../../config';
import {
  charactersAppState,
  episodesAppState,
  locationsAppState,
  navbarAppState
} from '../../config/context';

test('test if homepage is rendering', async () => {
  const { getByText } = await waitFor(() =>
    render(
      <MockedProvider>
        <AppContext.Provider
          value={{ navbarAppState, charactersAppState, locationsAppState, episodesAppState }}
        >
          <Homepage />
        </AppContext.Provider>
      </MockedProvider>
    )
  );
  expect(getByText('App HomePage')).toBeInTheDocument();
});
