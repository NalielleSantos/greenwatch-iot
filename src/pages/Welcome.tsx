
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-background to-amazon-green/5">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center space-y-6 py-8">
          <Logo />
          
          <h1 className="text-3xl font-bold text-amazon-green">
            Monitoramento Ambiental IoT
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Conectando comunidades à preservação ambiental
          </p>
          
          <div className="relative w-full h-32 water-wave rounded-lg bg-amazon-blue/5 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amazon-blue/20"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                <rect width="7" height="5" x="7" y="7" rx="1"></rect>
                <rect width="7" height="5" x="10" y="12" rx="1"></rect>
              </svg>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            className="w-full bg-amazon-green hover:bg-amazon-green-light"
            size="lg"
            onClick={() => navigate('/login')}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
