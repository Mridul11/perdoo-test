import { render } from '@testing-library/react';
import Loader from './loader';

test('test if Loader is rendering', () => {
  const { getByTestId } = render(<Loader />);
  expect(getByTestId('spinner')).toBeInTheDocument();
});
