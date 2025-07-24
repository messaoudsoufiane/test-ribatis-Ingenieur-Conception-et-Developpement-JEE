import React from 'react';
import { HomeOutlined, TeamOutlined, BookOutlined, AppstoreOutlined, UserOutlined, PartitionOutlined } from '@ant-design/icons';
import { Button, Avatar } from 'antd';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
              <AppstoreOutlined className="text-blue-600 text-lg sm:text-xl" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <HomeOutlined />
              <span>Accueil</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <TeamOutlined />
              <span>Organisations</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <BookOutlined />
              <span>Guichets</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white border-b-2 border-white pb-1">
              <AppstoreOutlined />
              <span>e-Services</span>
            </a>
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-0.5 sm:p-1">
              <Button 
                type="primary"
                className="bg-white text-blue-600 border-none rounded-full px-2 sm:px-4 py-1 h-7 sm:h-8 text-xs sm:text-sm font-medium hover:bg-blue-50"
                icon={<PartitionOutlined className="text-blue-600" />}
              >
                <span className="hidden sm:inline">Partenaire</span>
              </Button>
              <Button 
                type="text"
                className="text-white border-none rounded-full px-2 sm:px-4 py-1 h-7 sm:h-8 text-xs sm:text-sm font-medium hover:bg-white/10"
                icon={<UserOutlined className="text-white" />}
              >
                <span className="hidden sm:inline">Usager</span>
              </Button>
            </div>
            <Avatar className="bg-blue-500" size={window.innerWidth < 640 ? 32 : 40}>
              <span className="text-sm font-semibold">GM</span>
            </Avatar>
            <span className="hidden xl:inline text-sm">GHALLAM MOHAMED</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;