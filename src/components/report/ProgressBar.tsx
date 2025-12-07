import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: "blue" | "yellow" | "red" | "green" | "purple";
  className?: string;
  showPercentage?: boolean;
}

export const ProgressBar = ({
  value,
  max = 100,
  label,
  color = "blue",
  className,
  showPercentage = true,
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const colorVariants = {
    blue: "from-primary to-[hsl(217_91%_70%)]",
    yellow: "from-secondary to-[hsl(43_96%_65%)]",
    red: "from-accent to-[hsl(0_84%_70%)]",
    green: "from-success to-[hsl(160_84%_50%)]",
    purple: "from-purple to-[hsl(271_81%_70%)]",
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-foreground">{label}</span>
          {showPercentage && (
            <span className="font-comic text-lg text-primary">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="progress-bar">
        <div
          className={cn(
            "progress-fill bg-gradient-to-r",
            colorVariants[color]
          )}
          style={{ width: `${percentage}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
};
