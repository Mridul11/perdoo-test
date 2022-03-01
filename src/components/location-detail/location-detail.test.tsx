import { render } from '@testing-library/react';
import LocationDetail from './location-detail';

test('should render', () => {
  const { getByText } = render(<LocationDetail />);
  const textElement = getByText('LocationDetail');
  expect(textElement).toBeInTheDocument();
});
