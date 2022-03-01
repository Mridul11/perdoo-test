import { useQuery } from '@apollo/client';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useParams } from 'react-router-dom';
import { GET_LOCATIONS_DETAIL } from '../../utils/queries';
import Loader from '../loader/loader';

export default function LocationDetail() {
  const params = useParams();
  const id = params.id;
  const { loading, error, data } = useQuery(GET_LOCATIONS_DETAIL, {
    variables: { id }
  });

  if (loading) return <Loader />;

  const { location } = data || { location: { name: '', type: '', dimension: '', created: '' } };
  return (
    <>
      <h1>Location Detail</h1>
      <Card style={{ width: 300 }} data-testid="test-location-detail">
        <Meta title={location.name} />
        <Meta description={location.created} />
        <Meta description={location.dimension} />
        <Meta description={location.type} />
      </Card>
    </>
  );
}
