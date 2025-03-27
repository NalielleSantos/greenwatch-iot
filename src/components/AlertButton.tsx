
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AlertButton: React.FC = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleSendAlert = () => {
    toast({
      title: "Alerta enviado",
      description: "Órgãos ambientais foram notificados sobre a situação.",
      variant: "default",
    });
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-amazon-orange hover:bg-amazon-orange-light animate-pulse-alert flex items-center justify-center p-0"
          variant="default"
          size="icon"
        >
          <Bell className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Enviar alerta de emergência</DialogTitle>
          <DialogDescription>
            Isso enviará uma notificação de emergência para os órgãos ambientais responsáveis. Use apenas em situações críticas.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Ao confirmar, os dados atuais dos sensores serão compartilhados junto com a localização e informações de contato.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button className="bg-amazon-orange hover:bg-amazon-orange-light" onClick={handleSendAlert}>Confirmar Envio</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlertButton;
