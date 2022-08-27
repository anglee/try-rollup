import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

interface IProps {}

const AntButton = ({}: IProps) => {
  return (
    <Button type="primary" icon={<PlusOutlined />}>
      Ant1234
    </Button>
  );
};

export default AntButton;
