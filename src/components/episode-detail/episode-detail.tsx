import { useQuery } from '@apollo/client';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useParams } from 'react-router-dom';
import { GET_EPISODES_DETAIL } from '../../utils/queries';
import Loader from '../loader/loader';

export default function EpisodeDetail() {
  const params = useParams();
  const id = params.id;
  const { loading, error, data } = useQuery(GET_EPISODES_DETAIL, {
    variables: { id }
  });

  if (loading) return <Loader />;
  const { episode } = data || { episode: { name: '', air_date: '', created: '' } };
  return (
    <div>
      <h1>Episode Detail</h1>
      <Card style={{ width: 300 }} data-testid="test-episode-detail">
        <Meta title={episode.name} />
        <Meta description={episode.air_date} />
        <Meta description={episode.created} />
      </Card>
      ,
    </div>
  );
}
