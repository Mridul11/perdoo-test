import { cleanup, render, waitFor } from '@testing-library/react';
import LocationDetail from './location-detail';
import { MockedProvider } from '@apollo/client/testing';
import { GET_LOCATIONS_DETAIL } from '../../utils/queries';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <LocationDetail />
    </MockedProvider>
  );
  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});

test('should render location details', async () => {
  const locationMocks = [
    {
      request: {
        query: GET_LOCATIONS_DETAIL,
        variables: { id: '1' }
      },
      result: {
        data: {
          location: {
            name: 'Rick Sanchez',
            created: 'Alive',
            dimension: 'Male',
            type: 'SomeType'
          }
        }
      }
    }
  ];

  const { findByTestId, findByText } = render(
    <MockedProvider mocks={locationMocks} addTypename={false}>
      <BrowserRouter>
        <LocationDetail />
      </BrowserRouter>
    </MockedProvider>
  );

  const textElement = await findByText('Location Detail');
  const detailElement = await findByTestId('test-location-detail');

  expect(detailElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
