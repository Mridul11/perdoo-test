import { render } from '@testing-library/react';
import Detailspage from '../details-page';

test('test if homepage is rendering', () => {
  const { getByText } = render(<Detailspage />);
  expect(getByText('Detailspage')).toBeInTheDocument();
});
