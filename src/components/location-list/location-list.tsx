import { useQuery } from '@apollo/client';
import { Table, Button } from 'antd';
import Column from 'antd/lib/table/Column';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../config';
import { GET_LOCATIONS } from '../../utils/queries';
import Apperror from '../error-component/app-error';
import Loader from '../loader/loader';

export default function CharacterList() {
  const { locationsAppState } = useContext(AppContext);
  const [location, locationStateSet] = locationsAppState;
  const { loading, data, error } = useQuery(GET_LOCATIONS);

  useEffect(() => {
    data ? locationStateSet(data.locations.results) : [];
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Apperror />;

  return (
    <>
      <h1>Location List</h1>
      <Table dataSource={location}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Type" dataIndex="type" key="type" />
        {/* <Column
          title="Resident Name"
          render={(location) => location.residents.name}
          key="species"
        /> */}
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
