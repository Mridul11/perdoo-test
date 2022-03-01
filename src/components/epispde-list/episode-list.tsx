import { useQuery } from '@apollo/client';
import { Table, Button } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';
import { GET_EPISODES } from '../../utils/queries';
import Loader from '../loader/loader';

export default function EpisodeList() {
  const { loading, data } = useQuery(GET_EPISODES);

  if (loading) return <Loader />;

  const dataItems = data || {
    episodes: {
      results: [
        {
          name: '',
          air_date: '',
          episode: '',
          created: ''
        }
      ]
    }
  };

  return (
    <>
      <h1>Episode List</h1>
      <Table dataSource={dataItems.episodes.results} data-testid="test-episodelist">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Air-Date" dataIndex="air_date" key="species" />
        <Column title="Created" dataIndex="created" key="species" />
        <Column title="Episode" dataIndex="episode" key="gender" />
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
