
import React from 'react';
import Logo from '@/components/Logo';
import SensorCard from '@/components/SensorCard';
import AlertButton from '@/components/AlertButton';
import LocationSelector from '@/components/LocationSelector';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
          <div>
            <div className="text-sm text-muted-foreground">
              Última atualização: <span className="font-medium">Hoje, 14:32</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Localização</h2>
          <LocationSelector />
        </div>

        <h2 className="text-xl font-semibold mb-4">Monitoramento em Tempo Real</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SensorCard 
            title="Temperatura" 
            value="31" 
            unit="°C" 
            type="temperature"
            data={[30, 45, 60, 70, 55, 65, 75]}
          />
          
          <SensorCard 
            title="pH da Água" 
            value="6.5" 
            unit="pH" 
            type="ph"
            data={[45, 50, 55, 50, 48, 52, 54]}
          />
          
          <SensorCard 
            title="Turbidez" 
            value="1.4" 
            unit="NTU" 
            type="turbidity"
            data={[20, 25, 30, 25, 40, 35, 30]}
          />
          
          <SensorCard 
            title="Nível da Água" 
            value="65" 
            unit="%" 
            type="waterLevel"
            data={[35, 40, 50, 60, 55, 65, 72]}
          />
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Informações do Sistema</h2>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-r border-gray-200 pr-4">
                <h3 className="text-sm font-medium text-muted-foreground">Conexão</h3>
                <p className="flex items-center mt-1">
                  <span className="h-2 w-2 rounded-full bg-amazon-green mr-2"></span>
                  Starlink (Online)
                </p>
              </div>
              <div className="border-r border-gray-200 pr-4">
                <h3 className="text-sm font-medium text-muted-foreground">Hardware</h3>
                <p className="mt-1">ESP32 + Sensores Arduino</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Atualização de Dados</h3>
                <p className="mt-1">A cada 15 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Alert Button */}
      <AlertButton />
    </div>
  );
};

export default Dashboard;
