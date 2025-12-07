import { cn } from "@/lib/utils";

interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
  tailPosition?: "left" | "center" | "right";
}

export const SpeechBubble = ({
  children,
  className,
  tailPosition = "left",
}: SpeechBubbleProps) => {
  const tailPositions = {
    left: "left-8",
    center: "left-1/2 -translate-x-1/2",
    right: "right-8",
  };

  return (
    <div className={cn("relative bg-card rounded-2xl border-3 border-foreground p-4", className)}
      style={{ boxShadow: "4px 4px 0px hsl(220 20% 15%)" }}
    >
      {children}
      <div
        className={cn(
          "absolute -bottom-3 w-6 h-6 bg-card border-b-3 border-r-3 border-foreground",
          tailPositions[tailPosition]
        )}
        style={{ transform: "rotate(45deg)" }}
      />
    </div>
  );
};
