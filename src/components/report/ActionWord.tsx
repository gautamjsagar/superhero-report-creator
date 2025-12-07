import { cn } from "@/lib/utils";

interface ActionWordProps {
  word: string;
  variant?: "pow" | "bam" | "kaboom" | "zap";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const ActionWord = ({
  word,
  variant = "pow",
  className,
  size = "md",
}: ActionWordProps) => {
  const variants = {
    pow: {
      bg: "from-accent to-[hsl(0_84%_70%)]",
      text: "text-primary-foreground",
      rotation: "-rotate-6",
    },
    bam: {
      bg: "from-secondary to-[hsl(43_96%_65%)]",
      text: "text-foreground",
      rotation: "rotate-3",
    },
    kaboom: {
      bg: "from-purple to-[hsl(271_81%_70%)]",
      text: "text-primary-foreground",
      rotation: "-rotate-3",
    },
    zap: {
      bg: "from-primary to-[hsl(217_91%_70%)]",
      text: "text-primary-foreground",
      rotation: "rotate-6",
    },
  };

  const sizes = {
    sm: "text-xl px-3 py-1",
    md: "text-3xl px-4 py-2",
    lg: "text-5xl px-6 py-3",
  };

  const style = variants[variant];

  return (
    <div
      className={cn(
        "inline-block font-comic uppercase tracking-wide rounded-lg border-3 border-foreground",
        `bg-gradient-to-br ${style.bg}`,
        style.text,
        style.rotation,
        sizes[size],
        className
      )}
      style={{ boxShadow: "4px 4px 0px hsl(220 20% 15%)" }}
    >
      {word}!
    </div>
  );
};
