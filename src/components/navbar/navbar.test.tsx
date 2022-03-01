import { render } from '@testing-library/react';
import Navbar from './navbar';

test('test if Navbar is rendering', () => {
  const { getByText } = render(<Navbar />);
  expect(getByText('Navbar')).toBeInTheDocument();
});
