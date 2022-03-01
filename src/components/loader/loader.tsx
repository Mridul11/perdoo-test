import { Spin } from 'antd';

export default function Loader() {
  return (
    <div data-testid="spinner">
      <Spin size="large" />
    </div>
  );
}
