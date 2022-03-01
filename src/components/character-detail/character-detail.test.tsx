import { render } from '@testing-library/react';
import CharacterDetail from './character-detail';
import { MockedProvider } from '@apollo/client/testing';

test('should render', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <CharacterDetail />
    </MockedProvider>
  );
  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});
