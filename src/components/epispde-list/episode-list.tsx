import { useQuery } from '@apollo/client';
import { Table, Button } from 'antd';
import Column from 'antd/lib/table/Column';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../config';
import { GET_EPISODES } from '../../utils/queries';
import Loader from '../loader/loader';

export default function EpisodeList() {
  const { episodesAppState } = useContext(AppContext);
  const [episode, episodeSet] = episodesAppState;
  const { loading, data, error } = useQuery(GET_EPISODES);

  useEffect(() => {
    data ? episodeSet(data.episodes.results) : [];
  }, [data]);

  if (loading) return <Loader />;

  return (
    <>
      <h1>Episode List</h1>
      <Table dataSource={episode} data-testid="test-episodelist">
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
