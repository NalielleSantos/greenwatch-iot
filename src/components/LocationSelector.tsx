
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const LocationSelector: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="space-y-2">
        <Label htmlFor="state">Estado</Label>
        <Select defaultValue="amazonas">
          <SelectTrigger id="state">
            <SelectValue placeholder="Selecione o estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="amazonas">Amazonas</SelectItem>
            <SelectItem value="para">Pará</SelectItem>
            <SelectItem value="rondonia">Rondônia</SelectItem>
            <SelectItem value="acre">Acre</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city">Cidade</Label>
        <Select defaultValue="manaus">
          <SelectTrigger id="city">
            <SelectValue placeholder="Selecione a cidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manaus">Manaus</SelectItem>
            <SelectItem value="tefe">Tefé</SelectItem>
            <SelectItem value="coari">Coari</SelectItem>
            <SelectItem value="parintins">Parintins</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="municipality">Município</Label>
        <Select defaultValue="central">
          <SelectTrigger id="municipality">
            <SelectValue placeholder="Selecione o município" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="central">Central</SelectItem>
            <SelectItem value="oeste">Oeste</SelectItem>
            <SelectItem value="leste">Leste</SelectItem>
            <SelectItem value="sul">Sul</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="community">Comunidade</Label>
        <Select defaultValue="rioPurus">
          <SelectTrigger id="community">
            <SelectValue placeholder="Selecione a comunidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rioPurus">Rio Purus</SelectItem>
            <SelectItem value="rioNegro">Rio Negro</SelectItem>
            <SelectItem value="rioSolimoes">Rio Solimões</SelectItem>
            <SelectItem value="rioJapura">Rio Japurá</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LocationSelector;
