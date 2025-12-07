import { cn } from "@/lib/utils";

interface BadgeProps {
  icon: string;
  label: string;
  sublabel?: string;
  color?: "blue" | "yellow" | "red" | "green" | "purple";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Badge = ({
  icon,
  label,
  sublabel,
  color = "blue",
  size = "md",
  className,
}: BadgeProps) => {
  const colorVariants = {
    blue: "bg-gradient-to-br from-primary to-[hsl(217_91%_50%)]",
    yellow: "bg-gradient-to-br from-secondary to-[hsl(43_96%_45%)]",
    red: "bg-gradient-to-br from-accent to-[hsl(0_84%_50%)]",
    green: "bg-gradient-to-br from-success to-[hsl(160_84%_30%)]",
    purple: "bg-gradient-to-br from-purple to-[hsl(271_81%_45%)]",
  };

  const sizeVariants = {
    sm: "w-16 h-16 text-2xl",
    md: "w-24 h-24 text-3xl",
    lg: "w-32 h-32 text-4xl",
  };

  const textSizes = {
    sm: "text-[8px]",
    md: "text-xs",
    lg: "text-sm",
  };

  return (
    <div
      className={cn(
        "badge-circle",
        colorVariants[color],
        sizeVariants[size],
        "text-primary-foreground",
        className
      )}
    >
      <span className="mb-1">{icon}</span>
      <span className={cn("font-comic uppercase leading-tight", textSizes[size])}>
        {label}
      </span>
      {sublabel && (
        <span className={cn("font-comic uppercase leading-tight", textSizes[size])}>
          {sublabel}
        </span>
      )}
    </div>
  );
};
