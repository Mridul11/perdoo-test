import { render } from '@testing-library/react';
import Loader from './loader';

test('test if Loader is rendering', () => {
  const { getByText } = render(<Loader />);
  expect(getByText('Loader')).toBeInTheDocument();
});
