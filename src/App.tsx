import React, { useState } from 'react';
import { Search, Filter, Grid3X3, List, Star, Users } from 'lucide-react';
import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import ServiceCard from './components/ServiceCard';
import servicesData from './data/services.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Récent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('catalogue');
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (serviceId: unknown) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(serviceId)) {
      newFavorites.delete(serviceId);
    } else {
      newFavorites.add(serviceId);
    }
    setFavorites(newFavorites);
  };

  const filteredAndSortedServices = servicesData
    .filter(service => {
      const matchesSearch = (service?.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (service?.owner?.toLowerCase() || '').includes(searchTerm.toLowerCase());
      
      // Filtre selon l'onglet actif
      if (activeTab === 'favoris') {
        return matchesSearch && favorites.has(service.id);
      }
      
      return matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Alphabétique':
          return (a.title || '').localeCompare(b.title || '');
        case 'Date d\'ajout':
          return new Date(b.dateAdded || '2024-01-01').getTime() - new Date(a.dateAdded || '2024-01-01').getTime();
        case 'Récent':
        default:
          return (
            new Date(b.dateAdded || '2024-01-01').getTime() -
            new Date(a.dateAdded || '2024-01-01').getTime()
          );
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Catalogue Section - Single White Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Tabs Section */}
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => setActiveTab('catalogue')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeTab === 'catalogue'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
                }`}
              >
                Catalogue
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full min-w-[24px] text-center">
                  {servicesData.length}
                </span>
              </button>
              
              <button
                onClick={() => setActiveTab('favoris')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeTab === 'favoris'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
                }`}
              >
                <Star className="w-4 h-4" />
                <span className="hidden sm:inline">Mes favoris</span>
                <span className="sm:hidden">Favoris</span>
                {favorites.size > 0 && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full min-w-[24px] text-center">
                    {favorites.size}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setActiveTab('participe')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeTab === 'participe'
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Où je participe</span>
                <span className="sm:hidden">Participe</span>
              </button>
            </div>
          </div>
          {/* Search and Controls */}
          <div className="p-4 sm:p-6 border-b border-gray-200">
            {/* Search and Controls */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 whitespace-nowrap">Trier par:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Récent">Récent</option>
                    <option value="Alphabétique">Alphabétique</option>
                    <option value="Date d'ajout">Date d'ajout</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
                    <Filter className="w-4 h-4" />
                    <span className="hidden sm:inline">Filtres</span>
                  </button>
                  
                  <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 transition-colors ${
                        viewMode === 'list'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="p-4 sm:p-6">
            <div className={`grid gap-4 sm:gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
                : 'grid-cols-1'
            }`}>
              {filteredAndSortedServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  viewMode={viewMode}
                  isFavorite={favorites.has(service.id)}
                  onToggleFavorite={() => toggleFavorite(service.id)}
                />
              ))}
            </div>

            {filteredAndSortedServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  {activeTab === 'favoris' 
                    ? 'Aucun service favori trouvé.' 
                    : 'Aucun service trouvé pour votre recherche.'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;