import { cleanup, render } from '@testing-library/react';
import EpisodeDetail from './episode-detail';
import { MockedProvider } from '@apollo/client/testing';
import { GET_EPISODES_DETAIL } from '../../utils/queries';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <EpisodeDetail />
    </MockedProvider>
  );
  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});

test('should render episode details', async () => {
  const locationMocks = [
    {
      request: {
        query: GET_EPISODES_DETAIL,
        variables: { id: '1' }
      },
      result: {
        data: {
          location: {
            name: 'Rick Sanchez',
            created: 'Alive',
            air_date: Date.now()
          }
        }
      }
    }
  ];

  const { findAllByText, getByTestId, findByTestId, findByText } = render(
    <MockedProvider mocks={locationMocks} addTypename={false}>
      <BrowserRouter>
        <EpisodeDetail />
      </BrowserRouter>
    </MockedProvider>
  );

  const textElement = await findByText('Episode Detail');
  const detailElement = await findByTestId('test-episode-detail');

  expect(detailElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
