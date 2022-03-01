import { cleanup, findByText, render, waitFor } from '@testing-library/react';
import CharacterList from './character-list';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTERS } from '../../utils/queries';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

test('should render', async () => {
  const { getByTestId } = await waitFor(() =>
    render(
      <MockedProvider>
        <CharacterList />
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
        query: GET_CHARACTERS,
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

  const { findByTestId, findByText } = render(
    <MockedProvider mocks={characterMocks} addTypename={false}>
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    </MockedProvider>
  );

  const textElement = await findByText('Character List');
  // const headerElement = await findByTestId('test-list');
  // expect(headerElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
