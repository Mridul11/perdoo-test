import { render } from '@testing-library/react';
import Homepage from './home-page';

test('test if homepage is rendering', () => {
  const { getByText } = render(<Homepage />);
  expect(getByText('Homepage')).toBeInTheDocument();
});
