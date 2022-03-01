import { render } from '@testing-library/react';
import EpisodeDetail from './episode-detail';

test('should render', () => {
  const { getByText } = render(<EpisodeDetail />);
  const textElement = getByText('EpisodeDetail');
  expect(textElement).toBeInTheDocument();
});
