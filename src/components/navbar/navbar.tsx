import { Menu } from 'antd';
import { GlobalOutlined, RedditOutlined, PlaySquareOutlined } from '@ant-design/icons';
import { useState } from 'react';

type MenuButtonProps = {
  key: string;
};

const Navbar = () => {
  const [current, currentSet] = useState('mail');

  const handleClick = (e: MenuButtonProps) => {
    console.log('click ', e);
    currentSet(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<RedditOutlined />}>
        Characters
      </Menu.Item>
      <Menu.Item key="app" icon={<GlobalOutlined />}>
        Location
      </Menu.Item>
      <Menu.Item key="alipay" icon={<PlaySquareOutlined />}>
        Episode
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
