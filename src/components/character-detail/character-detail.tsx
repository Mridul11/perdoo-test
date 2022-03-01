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

  const { character } = data || { character: { name: '', image: '', species: '', status: '' } };
  return (
    <div>
      <h1>Character Detail</h1>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={`${character.image}`} />}
        data-testid="test-character-detail"
      >
        <Meta title={character.name} />
        <Meta description={character.species} />
        <Meta description={character.status} />
      </Card>
      ,
    </div>
  );
}
