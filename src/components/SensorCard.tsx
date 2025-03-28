
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropletIcon, Thermometer, Activity, Waves } from "lucide-react";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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
        return Number(value) > 35 ? '#FF8F00' : '#1B5E20';
      case 'ph':
        const phValue = Number(value);
        return phValue < 6 || phValue > 8 ? '#FF8F00' : '#1B5E20';
      case 'turbidity':
        return Number(value) > 2 ? '#FF8F00' : '#1B5E20';
      case 'waterLevel':
        return Number(value) > 70 ? '#FF8F00' : '#1B5E20';
      default:
        return '#1B5E20';
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

  // Convert the data array to a format suitable for the pie chart
  const pieData = [
    { name: 'Value', value: getProgressValue() },
    { name: 'Remaining', value: 100 - getProgressValue() }
  ];

  return (
    <Card className="sensor-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">
          {title}
        </CardTitle>
        {getIcon()}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-36 relative">
            <ChartContainer
              config={{
                value: {
                  theme: {
                    light: getStatusColor(),
                    dark: getStatusColor()
                  }
                },
                remaining: {
                  theme: {
                    light: '#e5e7eb',
                    dark: '#374151'
                  }
                }
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={55}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index === 0 ? 'var(--color-value)' : 'var(--color-remaining)'} 
                      />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent />} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">
                  {value}
                  <span className="text-sm text-muted-foreground ml-1">{unit}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {Math.round(getProgressValue())}%
                </div>
              </div>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorCard;
