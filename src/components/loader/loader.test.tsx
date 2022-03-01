import { render } from '@testing-library/react';
import Loader from './loader';
import { MockedProvider } from '@apollo/client/testing';

test('test if Loader is rendering', () => {
  const { getByTestId } = render(
    <MockedProvider>
      <Loader />
    </MockedProvider>
  );
  expect(getByTestId('spinner')).toBeInTheDocument();
});
