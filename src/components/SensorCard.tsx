
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropletIcon, Thermometer, Activity, Waves } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SensorCardProps {
  title: string;
  value: string | number;
  unit: string;
  type: 'temperature' | 'ph' | 'turbidity' | 'waterLevel';
  data?: number[];
}

const SensorCard: React.FC<SensorCardProps> = ({ title, value, unit, type, data = [40, 60, 55, 70, 65, 80, 75] }) => {
  const getIcon = () => {
    switch (type) {
      case 'temperature':
        return <Thermometer className="h-6 w-6 text-amazon-green" />;
      case 'ph':
        return <DropletIcon className="h-6 w-6 text-amazon-blue" />;
      case 'turbidity':
        return <Activity className="h-6 w-6 text-amazon-blue-light" />;
      case 'waterLevel':
        return <Waves className="h-6 w-6 text-amazon-blue" />;
      default:
        return <Activity className="h-6 w-6" />;
    }
  };

  const getStatusColor = () => {
    switch (type) {
      case 'temperature':
        return Number(value) > 35 ? 'bg-amazon-orange' : 'bg-amazon-green';
      case 'ph':
        const phValue = Number(value);
        return phValue < 6 || phValue > 8 ? 'bg-amazon-orange' : 'bg-amazon-green';
      case 'turbidity':
        return Number(value) > 2 ? 'bg-amazon-orange' : 'bg-amazon-green';
      case 'waterLevel':
        return Number(value) > 70 ? 'bg-amazon-orange' : 'bg-amazon-green';
      default:
        return 'bg-amazon-green';
    }
  };

  const getProgressValue = () => {
    switch (type) {
      case 'temperature':
        return Math.min(100, (Number(value) / 50) * 100);
      case 'ph':
        return Math.min(100, (Number(value) / 14) * 100);
      case 'turbidity':
        return Math.min(100, (Number(value) / 5) * 100);
      case 'waterLevel':
        return Number(value);
      default:
        return 50;
    }
  };

  return (
    <Card className="sensor-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">
          {title}
        </CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent className="pb-2">
        <div className="text-2xl font-bold flex items-baseline">
          {value}
          <span className="text-sm text-muted-foreground ml-1">{unit}</span>
        </div>
        <Progress 
          value={getProgressValue()} 
          className="h-2 mt-2"
          indicatorClassName={getStatusColor()}
        />
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex w-full justify-between items-center h-10">
          {data.map((item, index) => (
            <div 
              key={index} 
              className={`w-1 rounded-full transition-all ${getStatusColor()}`}
              style={{ height: `${item}%`, opacity: 0.7 + (index * 0.05) }}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default SensorCard;
