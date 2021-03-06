import { cleanup, render, waitFor } from '@testing-library/react';
import EpisodeList from './episode-list';
import { MockedProvider } from '@apollo/client/testing';
import { GET_EPISODES } from '../../utils/queries';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

test('should render in document', async () => {
  const { getByTestId } = await waitFor(() =>
    render(
      <MockedProvider>
        <EpisodeList />
      </MockedProvider>
    )
  );

  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});

test('should render character list', async () => {
  const characterMocks = [
    {
      request: {
        query: GET_EPISODES,
        variables: { page: 1 }
      },
      result: {
        data: {
          characters: {
            results: [
              {
                name: 'Rick Sanchez',
                status: 'Alive',
                gender: 'Male',
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
              }
            ]
          }
        }
      }
    }
  ];

  const { findByTestId, findByText } = await waitFor(() =>
    render(
      <MockedProvider mocks={characterMocks} addTypename={false}>
        <BrowserRouter>
          <EpisodeList />
        </BrowserRouter>
      </MockedProvider>
    )
  );

  const textElement = await findByText('Episode List');
  const headerElement = await findByTestId('test-episodelist');
  expect(headerElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
