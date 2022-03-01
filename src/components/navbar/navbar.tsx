import { Menu } from 'antd';
import { GlobalOutlined, RedditOutlined, PlaySquareOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AppContext } from '../../config';
import { useNavigate } from 'react-router-dom';

type MenuButtonProps = {
  key: string;
};

const Navbar = () => {
  const { navbarAppState } = useContext(AppContext);
  const [current, currentSet] = navbarAppState;
  const navigate = useNavigate();

  const handleClick = (e: MenuButtonProps) => {
    currentSet(e.key);
  };
  console.log(current);
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" data-testid="test-menu">
      <Menu.Item
        key="character"
        icon={<RedditOutlined />}
        onClick={() => navigate('/')}
        data-testid="test-character"
      >
        Characters
      </Menu.Item>
      <Menu.Item
        key="location"
        icon={<GlobalOutlined />}
        onClick={() => navigate('/')}
        data-testid="test-location"
      >
        Location
      </Menu.Item>
      <Menu.Item
        key="episode"
        icon={<PlaySquareOutlined />}
        onClick={() => navigate('/')}
        data-testid="test-episode"
      >
        Episode
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
