import { render, waitFor } from '@testing-library/react';
import Navbar from './navbar';

test('test if Navbar is rendering', async () => {
  const { getByText } = await waitFor(() => render(<Navbar />));
  expect(getByText('Characters')).toBeInTheDocument();
});
