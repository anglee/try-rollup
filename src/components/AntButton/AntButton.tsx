import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

export interface IProps {
  text: string;
}

const AntButton = ({ text }: IProps) => {
  return (
    <Button type="primary" icon={<PlusOutlined />}>
      {text}
    </Button>
  );
};

export default AntButton;
