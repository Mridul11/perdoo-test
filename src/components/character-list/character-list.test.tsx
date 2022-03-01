import { render } from '@testing-library/react';
import CharacterList from './character-list';

test('should render', () => {
  const { getByText } = render(<CharacterList />);
  const textElement = getByText('CharacterList');
  expect(textElement).toBeInTheDocument();
});
