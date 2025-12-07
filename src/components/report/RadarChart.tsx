import { cn } from "@/lib/utils";

interface RadarChartProps {
  data: {
    label: string;
    value: number;
    icon?: string;
  }[];
  size?: number;
  className?: string;
}

export const RadarChart = ({ data, size = 200, className }: RadarChartProps) => {
  const center = size / 2;
  const radius = size * 0.4;
  const angleStep = (2 * Math.PI) / data.length;

  // Generate polygon points for the data
  const dataPoints = data.map((item, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (item.value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  });

  // Generate grid lines
  const gridLevels = [0.25, 0.5, 0.75, 1];

  // Generate axis lines and labels
  const axes = data.map((item, i) => {
    const angle = i * angleStep - Math.PI / 2;
    return {
      x1: center,
      y1: center,
      x2: center + radius * Math.cos(angle),
      y2: center + radius * Math.sin(angle),
      labelX: center + (radius + 25) * Math.cos(angle),
      labelY: center + (radius + 25) * Math.sin(angle),
      label: item.label,
      icon: item.icon,
    };
  });

  const polygonPoints = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className={cn("relative", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid */}
        {gridLevels.map((level, i) => {
          const gridPoints = data.map((_, j) => {
            const angle = j * angleStep - Math.PI / 2;
            const r = level * radius;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(" ");
          return (
            <polygon
              key={i}
              points={gridPoints}
              fill="none"
              stroke="hsl(220, 20%, 85%)"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
          );
        })}

        {/* Axes */}
        {axes.map((axis, i) => (
          <line
            key={i}
            x1={axis.x1}
            y1={axis.y1}
            x2={axis.x2}
            y2={axis.y2}
            stroke="hsl(220, 20%, 75%)"
            strokeWidth="2"
          />
        ))}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill="url(#radarGradient)"
          stroke="hsl(217, 91%, 60%)"
          strokeWidth="3"
          opacity="0.8"
        />

        {/* Data points */}
        {dataPoints.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="hsl(217, 91%, 60%)"
            stroke="hsl(220, 20%, 15%)"
            strokeWidth="2"
          />
        ))}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(43, 96%, 56%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(0, 84%, 60%)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Labels */}
      {axes.map((axis, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: axis.labelX, top: axis.labelY }}
        >
          {axis.icon && <span className="text-xl">{axis.icon}</span>}
          <span className="font-comic text-xs text-foreground text-center leading-tight">
            {axis.label}
          </span>
        </div>
      ))}
    </div>
  );
};
