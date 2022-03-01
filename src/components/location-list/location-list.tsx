import { useQuery } from '@apollo/client';
import { Table, Button } from 'antd';
import Column from 'antd/lib/table/Column';
import { Link } from 'react-router-dom';
import { GET_LOCATIONS } from '../../utils/queries';
import Loader from '../loader/loader';

export default function LocationList() {
  const { loading, data } = useQuery(GET_LOCATIONS);

  if (loading) return <Loader />;

  const dataItems = data || {
    locations: {
      results: [
        {
          name: '',
          type: '',
          dimension: '',
          created: ''
        }
      ]
    }
  };

  return (
    <>
      <h1>Location List</h1>
      <Table dataSource={dataItems.locations.results} data-testid="test-episodelist">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Type" dataIndex="type" key="type" />
        <Column title="Dimension" dataIndex="dimension" key="dimension" />
        <Column title="Created" dataIndex="created" key="created" />
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
