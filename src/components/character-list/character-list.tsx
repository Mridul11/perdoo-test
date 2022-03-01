import { useQuery } from '@apollo/client';
import { Table, Button } from 'antd';
import Column from 'antd/lib/table/Column';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../config';
import { GET_CHARACTERS } from '../../utils/queries';
import Apperror from '../error-component/app-error';
import Loader from '../loader/loader';

export default function CharacterList() {
  const { charactersAppState } = useContext(AppContext);
  const [character, characterSet] = charactersAppState;
  const { loading, data, error } = useQuery(GET_CHARACTERS);

  useEffect(() => {
    data ? characterSet(data.characters.results) : [];
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Apperror />;

  return (
    <>
      <h1>Character List</h1>
      <Table dataSource={character}>
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
    </>
  );
}
