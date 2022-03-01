import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Navbar from './navbar';
import { BrowserRouter } from 'react-router-dom';

test('test if button click is working', async () => {
  const { getByTestId, getByText } = render(
    <MockedProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </MockedProvider>
  );
  const menuElement = getByTestId('test-menu');
  expect(menuElement).toBeInTheDocument();
  const btnElement = getByTestId('test-character');
  fireEvent.click(btnElement);
  expect(getByText('Characters')).toBeInTheDocument();
});
