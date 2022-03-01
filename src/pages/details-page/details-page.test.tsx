import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import Detailspage from './details-page';

test('test if homepage is rendering', async () => {
  const { getByText } = await waitFor(() =>
    render(
      <MockedProvider>
        <Detailspage />
      </MockedProvider>
    )
  );
  expect(getByText('App Details Page')).toBeInTheDocument();
});
