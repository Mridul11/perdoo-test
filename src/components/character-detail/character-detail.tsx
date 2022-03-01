import { useQuery } from '@apollo/client';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useParams } from 'react-router-dom';
import { GET_CHARACTERS_DETAIL } from '../../utils/queries';
import Apperror from '../error-component/app-error';
import Loader from '../loader/loader';

export default function CharacterDetail() {
  const params = useParams();
  const id = params.id;
  const { loading, error, data } = useQuery(GET_CHARACTERS_DETAIL, {
    variables: { id }
  });

  if (loading) return <Loader />;
  if (error) return <Apperror />;

  return (
    <div>
      <Card style={{ width: 300 }} cover={<img alt="example" src={`${data.character.image}`} />}>
        <Meta title={data ? data.character.name : ''} />
        <Meta description={data ? data.character.species : ''} />
        <Meta description={data ? data.character.status : ''} />
      </Card>
      ,
    </div>
  );
}
