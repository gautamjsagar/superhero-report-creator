import { cn } from "@/lib/utils";

interface StarburstProps {
  children: React.ReactNode;
  className?: string;
  variant?: "yellow" | "blue" | "red";
}

export const Starburst = ({ children, className, variant = "yellow" }: StarburstProps) => {
  const variants = {
    yellow: "from-secondary to-[hsl(43_96%_65%)]",
    blue: "from-primary to-[hsl(217_91%_70%)]",
    red: "from-accent to-[hsl(0_84%_70%)]",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center p-8",
        className
      )}
    >
      {/* Starburst background */}
      <svg
        className="absolute inset-0 w-full h-full animate-pulse-glow"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={variant === "yellow" ? "#FBBF24" : variant === "blue" ? "#3B82F6" : "#EF4444"} />
            <stop offset="100%" stopColor={variant === "yellow" ? "#FCD34D" : variant === "blue" ? "#60A5FA" : "#F87171"} />
          </linearGradient>
        </defs>
        <polygon
          fill={`url(#grad-${variant})`}
          stroke="hsl(220, 20%, 15%)"
          strokeWidth="2"
          points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
        />
      </svg>
      <span className="relative z-10 font-comic text-foreground text-shadow-white">
        {children}
      </span>
    </div>
  );
};
