
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from '@/components/Logo';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-background to-amazon-green/5">
      <div className="max-w-md w-full">
        <div className="mb-6 text-center">
          <Logo />
        </div>

        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold text-center">Login</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail/Usuário</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="usuario@exemplo.com" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <a href="#" className="text-xs text-amazon-blue hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-amazon-green hover:bg-amazon-green-light"
              >
                Entrar
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <a href="#" className="text-amazon-blue hover:underline">
                Cadastre-se
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
