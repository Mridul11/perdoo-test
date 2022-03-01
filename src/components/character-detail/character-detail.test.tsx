import { render } from '@testing-library/react';
import CharacterDetail from './character-detail';

test('should render', () => {
  const { getByText } = render(<CharacterDetail />);
  const textElement = getByText('CharacterDetail');
  expect(textElement).toBeInTheDocument();
});
