import React from 'react';
import { Input, Select, Button, Badge } from 'antd';
import { SearchOutlined, StarOutlined, FilterOutlined, AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { Option } = Select;

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  showFavorites: boolean;
  onToggleFavorites: () => void;
  totalServices: number;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  showFavorites,
  onToggleFavorites,
  totalServices,
  viewMode,
  onViewModeChange
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-6">
      <div className="container mx-auto px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Badge count={totalServices} showZero>
            <Button 
              type="primary"
              className="bg-blue-600 border-blue-600 hover:bg-blue-700"
            >
              Catalogue
            </Button>
          </Badge>
          <Button 
            type={showFavorites ? "primary" : "default"}
            icon={<StarOutlined />}
            onClick={onToggleFavorites}
            className={showFavorites ? "bg-green-600 border-green-600 hover:bg-green-700" : ""}
          >
            Mes favoris
          </Button>
          <Button 
            type="default"
            icon={<FilterOutlined />}
            className="text-green-600 border-green-600 hover:bg-green-50"
          >
            Où je participe
          </Button>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Rechercher"
              prefix={<SearchOutlined className="text-gray-400" />}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              size="large"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Trier par:</span>
              <Select
                value={sortBy}
                onChange={onSortChange}
                className="w-32"
                size="large"
              >
                <Option value="recent">Récent</Option>
                <Option value="alphabetical">A-Z</Option>
                <Option value="date">Date d'ajout</Option>
              </Select>
            </div>

            <Button
              icon={<FilterOutlined />}
              size="large"
              className="text-gray-600 border-gray-300 hover:border-blue-500 hover:text-blue-500"
            >
              Filtres
            </Button>

            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <Button
                type={viewMode === 'grid' ? 'primary' : 'default'}
                icon={<AppstoreOutlined />}
                onClick={() => onViewModeChange('grid')}
                className={`border-none ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-white text-gray-600'}`}
              />
              <Button
                type={viewMode === 'list' ? 'primary' : 'default'}
                icon={<UnorderedListOutlined />}
                onClick={() => onViewModeChange('list')}
                className={`border-none ${viewMode === 'list' ? 'bg-blue-600' : 'bg-white text-gray-600'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;