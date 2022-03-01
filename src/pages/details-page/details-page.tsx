import { useContext } from 'react';
import { EpisodeDetail, LocationDetail, CharacterDetail } from '../../components';
import { AppContext } from '../../config';

export default function Detailspage() {
  const { navbarAppState } = useContext(AppContext);
  const [current, currentSet] = navbarAppState;

  if (current === 'character') return <CharacterDetail />;
  if (current === 'location') return <LocationDetail />;
  if (current === 'episode') return <EpisodeDetail />;

  return <p>App Details Page</p>;
}
