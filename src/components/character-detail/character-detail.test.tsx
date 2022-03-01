import { cleanup, render } from '@testing-library/react';
import CharacterDetail from './character-detail';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTERS_DETAIL } from '../../utils/queries';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <CharacterDetail />
    </MockedProvider>
  );
  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});

test('should render character details', async () => {
  const locationMocks = [
    {
      request: {
        query: GET_CHARACTERS_DETAIL,
        variables: { id: '1' }
      },
      result: {
        data: {
          location: {
            name: 'Rick Sanchez',
            species: 'Human',
            status: 'Alive',
            image: 'SomeType"https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          }
        }
      }
    }
  ];

  const { findByTestId, findByText } = render(
    <MockedProvider mocks={locationMocks} addTypename={false}>
      <BrowserRouter>
        <CharacterDetail />
      </BrowserRouter>
    </MockedProvider>
  );

  const textElement = await findByText('Character Detail');
  const detailElement = await findByTestId('test-character-detail');

  expect(detailElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
