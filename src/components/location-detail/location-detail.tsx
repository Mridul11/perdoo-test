import { useQuery } from '@apollo/client';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useParams } from 'react-router-dom';
import { GET_LOCATIONS_DETAIL } from '../../utils/queries';
import Apperror from '../error-component/app-error';
import Loader from '../loader/loader';

export default function LocationDetail() {
  const params = useParams();
  const id = params.id;
  const { loading, error, data } = useQuery(GET_LOCATIONS_DETAIL, {
    variables: { id }
  });

  if (loading) return <Loader />;
  if (error) return <Apperror />;

  return (
    <div>
      <Card style={{ width: 300 }}>
        <Meta title={data.location.name} />
        <Meta description={data.location.created} />
        <Meta description={data.location.dimension} />
        <Meta description={data.location.type} />
      </Card>
      ,
    </div>
  );
}
