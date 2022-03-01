import { useContext } from 'react';
import { CharacterList, EpisodeList, LocationList } from '../../components';
import { AppContext } from '../../config';

export default function Homepage() {
  const { navbarAppState } = useContext(AppContext);
  const [current] = navbarAppState;

  if (current === 'character') return <CharacterList />;
  if (current === 'location') return <LocationList />;
  if (current === 'episode') return <EpisodeList />;
  return <p>App HomePage</p>;
}
