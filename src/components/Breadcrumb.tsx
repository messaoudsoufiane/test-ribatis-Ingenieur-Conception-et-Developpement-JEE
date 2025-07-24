import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb as AntBreadcrumb } from 'antd';

const Breadcrumb: React.FC = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 sm:px-6">
        <AntBreadcrumb
          items={[
            {
              href: '#',
              title: <HomeOutlined className="text-blue-600" />,
            },
            {
              title: 'Catalogue',
            },
          ]}
          className="text-gray-600"
        />
      </div>
    </div>
  );
};

export default Breadcrumb;