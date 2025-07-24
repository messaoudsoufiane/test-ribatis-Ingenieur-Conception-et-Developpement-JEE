import React from 'react';
import { Card, Button, Avatar } from 'antd';
import { StarOutlined, StarFilled, InfoCircleOutlined } from '@ant-design/icons';

interface Service {
  id: number;
  title: string;
  owner: string;
  logo: string;
  dateAdded: string;
  category: string;
}

interface ServiceCardProps {
  service: Service;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  viewMode: 'grid' | 'list';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  isFavorite, 
  onToggleFavorite,
  viewMode 
}) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
            <div className="relative">
              <Avatar 
                src={service.logo} 
                size={window.innerWidth < 640 ? 40 : 48}
                className="border-2 border-gray-200"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">K</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{service.title}</h3>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <span>Propriété de</span>
                <span className="text-blue-600 font-medium truncate">{service.owner}</span>
                <InfoCircleOutlined className="text-blue-600" />
              </div>
            </div>
          </div>
          <Button
            type="text"
            icon={isFavorite ? <StarFilled className="text-yellow-500" /> : <StarOutlined />}
            onClick={() => onToggleFavorite(service.id)}
            className="hover:bg-gray-50 flex-shrink-0"
            size="small"
          />
        </div>
      </div>
    );
  }

  return (
    <Card
      className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden group"
      bodyStyle={{ padding: window.innerWidth < 640 ? '16px' : '20px' }}
      hoverable
    >
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        {/* Logo avec badge */}
        <div className="relative">
          <Avatar 
            src={service.logo} 
            size={window.innerWidth < 640 ? 48 : 64}
            className="border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xs sm:text-sm font-bold">K</span>
          </div>
        </div>

        {/* Titre */}
        <h3 className="font-semibold text-sm sm:text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {service.title}
        </h3>

        {/* Propriétaire */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
          <span>Propriété de</span>
          <span className="text-blue-600 font-medium truncate">{service.owner}</span>
          <InfoCircleOutlined className="text-blue-600 hover:text-blue-700 cursor-pointer" />
        </div>

        {/* Bouton favori */}
        <Button
          type="text"
          icon={isFavorite ? <StarFilled className="text-yellow-500" /> : <StarOutlined />}
          onClick={() => onToggleFavorite(service.id)}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 hover:bg-gray-50 rounded-full"
          size="small"
        />
      </div>
    </Card>
  );
};

export default ServiceCard;