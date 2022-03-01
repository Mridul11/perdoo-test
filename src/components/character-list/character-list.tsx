import { useQuery } from '@apollo/client';
import { Table, Button } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';
import { GET_CHARACTERS } from '../../utils/queries';
import Loader from '../loader/loader';

export default function CharacterList() {
  const { loading, data } = useQuery(GET_CHARACTERS);

  const dataItems = data || {
    characters: {
      results: [{ gender: '', status: '', name: '', species: '', origin: { name: '' } }]
    }
  };

  if (loading) return <Loader />;

  return (
    <div data-testid="test-list">
      <h1>Character List</h1>
      <Table dataSource={dataItems.characters.results}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Species" dataIndex="species" key="species" />
        <Column title="Origin" render={(character) => character.origin.name} key="species" />
        <Column title="Gender" dataIndex="gender" key="gender" />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="View"
          render={(value, item, index) => {
            return (
              <Link to={`details/${++index}`}>
                <Button>View</Button>
              </Link>
            );
          }}
        ></Column>
      </Table>
    </div>
  );
}
