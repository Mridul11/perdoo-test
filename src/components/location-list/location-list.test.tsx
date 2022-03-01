import { cleanup, render, waitFor } from '@testing-library/react';
import LocationList from './location-list';
import { MockedProvider } from '@apollo/client/testing';
import { GET_LOCATIONS } from '../../utils/queries';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <LocationList />
    </MockedProvider>
  );

  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});

test('should render location list', async () => {
  const characterMocks = [
    {
      request: {
        query: GET_LOCATIONS,
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
          <LocationList />
        </BrowserRouter>
      </MockedProvider>
    )
  );

  const textElement = await findByText('Location List');
  const headerElement = await findByTestId('test-episodelist');
  expect(headerElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
