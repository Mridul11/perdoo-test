import { render } from '@testing-library/react';
import EpisodeDetail from './episode-detail';
import { MockedProvider } from '@apollo/client/testing';

test('should render', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <EpisodeDetail />
    </MockedProvider>
  );
  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});
