import { useContext } from 'react';
import { Apperror, CharacterDetail } from '../../components';
import EpisodeDetail from '../../components/episode-detail/episode-detail';
import LocationDetail from '../../components/location-detail/location-detail';
import { AppContext } from '../../config';

export default function Detailspage() {
  const { navbarAppState } = useContext(AppContext);
  const [current, currentSet] = navbarAppState;

  if (current === 'character') return <CharacterDetail />;
  if (current === 'location') return <LocationDetail />;
  if (current === 'episode') return <EpisodeDetail />;

  return <Apperror />;
}
