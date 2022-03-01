import { render } from '@testing-library/react';
import LocationDetail from './location-detail';
import { MockedProvider } from '@apollo/client/testing';

test('should render', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <LocationDetail />
    </MockedProvider>
  );
  const textElement = getByTestId('spinner');
  expect(textElement).toBeInTheDocument();
});
