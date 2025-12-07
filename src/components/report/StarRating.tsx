import { cn } from "@/lib/utils";

interface StarRatingProps {
  count: number;
  total?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const StarRating = ({
  count,
  total = 5,
  size = "md",
  className,
}: StarRatingProps) => {
  const sizes = {
    sm: "text-xl gap-1",
    md: "text-3xl gap-2",
    lg: "text-5xl gap-3",
  };

  return (
    <div className={cn("flex items-center", sizes[size], className)}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "transition-all duration-300",
            i < count
              ? "text-secondary animate-pulse-glow"
              : "text-muted-foreground opacity-40"
          )}
        >
          ⭐
        </span>
      ))}
    </div>
  );
};
