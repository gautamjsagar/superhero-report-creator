import { Starburst } from "./Starburst";
import { StarRating } from "./StarRating";
import { ActionWord } from "./ActionWord";

interface CoverPageProps {
  userName: string;
  codeName: string;
  missionDate: string;
  heroType: "detective" | "artist" | "captain";
}

export const CoverPage = ({
  userName,
  codeName,
  missionDate,
  heroType,
}: CoverPageProps) => {
  const heroEmojis = {
    detective: "🔍",
    artist: "🎨",
    captain: "⭐",
  };

  return (
    <div className="page-a4 polka-dots flex flex-col items-center relative">
      {/* Corner decorations */}
      <div className="absolute top-4 left-4">
        <ActionWord word="POW" variant="pow" size="sm" />
      </div>
      <div className="absolute top-4 right-4">
        <ActionWord word="ZAP" variant="zap" size="sm" />
      </div>

      {/* Title with starburst */}
      <div className="relative mb-8 mt-4">
        <Starburst className="w-80 h-32" variant="yellow">
          <h1 className="text-4xl text-center leading-tight">
            🦸 YOUR SUPERHERO<br />PROFILE! 🦸
          </h1>
        </Starburst>
      </div>

      {/* Hero Character Box */}
      <div className="comic-border-lg rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 mb-8 w-[80%] max-w-md">
        <div className="flex flex-col items-center">
          {/* Hero avatar placeholder */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple border-4 border-foreground flex items-center justify-center text-6xl mb-4"
            style={{ boxShadow: "4px 4px 0px hsl(220 20% 15%)" }}
          >
            {heroEmojis[heroType]}
          </div>
          
          <div className="text-center space-y-1">
            <p className="font-body text-sm text-muted-foreground">Trait-specific character:</p>
            <p className="font-comic text-lg">
              {heroType === "detective" && "• Analytical → Detective"}
              {heroType === "artist" && "• Creative → Artist"}
              {heroType === "captain" && "• Interpersonal → Captain"}
            </p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="text-center space-y-2 mb-8">
        <p className="font-comic text-2xl text-foreground">
          NAME: CHAMPION <span className="text-primary">{userName.toUpperCase()}</span>
        </p>
        <p className="font-body text-lg italic text-muted-foreground">
          CODE NAME: "{codeName}"
        </p>
        <p className="font-body text-base text-muted-foreground">
          MISSION DATE: {missionDate}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-col items-center gap-3">
        <StarRating count={5} total={5} size="lg" />
        <p className="font-comic text-xl text-secondary animate-pulse-glow">
          ALL BADGES UNLOCKED!
        </p>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <ActionWord word="HERO" variant="bam" size="sm" />
      </div>
    </div>
  );
};
