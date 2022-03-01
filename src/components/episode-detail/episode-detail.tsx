import { useQuery } from '@apollo/client';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useParams } from 'react-router-dom';
import { GET_EPISODES_DETAIL } from '../../utils/queries';
import Apperror from '../error-component/app-error';
import Loader from '../loader/loader';

export default function EpisodeDetail() {
  const params = useParams();
  const id = params.id;
  const { loading, error, data } = useQuery(GET_EPISODES_DETAIL, {
    variables: { id }
  });

  if (loading) return <Loader />;
  if (error) return <Apperror />;

  return (
    <div>
      <Card style={{ width: 300 }}>
        <Meta title={data.episode.name} />
        <Meta description={data.episode.air_date} />
        <Meta description={data.episode.created} />
      </Card>
      ,
    </div>
  );
}
