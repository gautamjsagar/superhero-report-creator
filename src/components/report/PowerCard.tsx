import { cn } from "@/lib/utils";
import { ProgressBar } from "./ProgressBar";
import { SpeechBubble } from "./SpeechBubble";

interface PowerCardProps {
  icon: string;
  title: string;
  percentage: number;
  description: string;
  color: "blue" | "yellow" | "red" | "green" | "purple";
  className?: string;
}

export const PowerCard = ({
  icon,
  title,
  percentage,
  description,
  color,
  className,
}: PowerCardProps) => {
  const borderColors = {
    blue: "border-primary",
    yellow: "border-secondary",
    red: "border-accent",
    green: "border-success",
    purple: "border-purple",
  };

  const bgPatterns = {
    blue: "halftone",
    yellow: "polka-dots",
    red: "halftone-dense",
    green: "halftone",
    purple: "polka-dots",
  };

  return (
    <div
      className={cn(
        "rounded-xl border-4 p-5 bg-card relative overflow-hidden",
        borderColors[color],
        className
      )}
      style={{ boxShadow: "5px 5px 0px hsl(220 20% 15%)" }}
    >
      {/* Background pattern */}
      <div className={cn("absolute inset-0 opacity-30", bgPatterns[color])} />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{icon}</span>
          <h3 className="font-comic text-xl uppercase text-foreground">
            {title}: {percentage}%
          </h3>
        </div>

        {/* Progress bar */}
        <ProgressBar
          value={percentage}
          color={color}
          showPercentage={false}
          className="mb-4"
        />

        {/* Description bubble */}
        <SpeechBubble className="bg-card/90 mt-2">
          <p className="text-sm font-body italic text-foreground">{description}</p>
        </SpeechBubble>
      </div>
    </div>
  );
};
