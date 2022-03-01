import { useContext } from 'react';
import CharacterList from '../../components/character-list/character-list';
import EpisodeList from '../../components/epispde-list/episode-list';
import LocationList from '../../components/location-list/location-list';
import { AppContext } from '../../config';

export default function Homepage() {
  const { navbarAppState } = useContext(AppContext);
  const [current] = navbarAppState;

  if (current === 'character') return <CharacterList />;
  if (current === 'location') return <LocationList />;
  if (current === 'episode') return <EpisodeList />;
  return <p>asd</p>;
}
