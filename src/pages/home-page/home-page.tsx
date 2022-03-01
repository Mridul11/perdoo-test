import { useContext } from 'react';
import CharacterList from '../../components/character-list/character-list';
import { AppContext } from '../../config';

export default function Homepage() {
  const { navbarAppState } = useContext(AppContext);
  const [current] = navbarAppState;

  if (current === 'character') return <CharacterList />;
  return <p>asd</p>;
}
