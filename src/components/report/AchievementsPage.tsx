import { Badge } from "./Badge";
import { ActionWord } from "./ActionWord";

interface AchievementsPageProps {
  questionsConquered: number;
  totalQuestions: number;
  timeTaken: number;
  longestStreak: number;
  percentile: number;
}

export const AchievementsPage = ({
  questionsConquered,
  totalQuestions,
  timeTaken,
  longestStreak,
  percentile,
}: AchievementsPageProps) => {
  return (
    <div className="page-a4 polka-dots flex flex-col relative">
      {/* Corner decoration */}
      <div className="absolute top-4 left-4">
        <ActionWord word="WOW" variant="kaboom" size="sm" />
      </div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="font-comic text-4xl text-foreground flex items-center gap-3">
          🏆 ACHIEVEMENTS UNLOCKED!
        </h2>
        <div className="h-1 bg-gradient-to-r from-secondary via-accent to-purple rounded-full mt-2" />
      </div>

      {/* Badge row */}
      <div className="flex justify-center gap-4 mb-10">
        <Badge icon="⚡" label="SPEED" sublabel="DEMON" color="yellow" size="sm" />
        <Badge icon="🔥" label="HOT" sublabel="STREAK" color="red" size="sm" />
        <Badge icon="🎯" label="PERFECT" sublabel="AIM" color="purple" size="sm" />
      </div>

      {/* Stats section */}
      <div className="comic-card mb-8 bg-card/90">
        <h3 className="font-comic text-2xl mb-6 text-foreground flex items-center gap-2">
          📊 YOUR GAME STATS:
        </h3>
        
        <ul className="space-y-4 font-body text-lg">
          <li className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <span className="text-foreground">
              Questions Conquered: <strong className="text-success">{questionsConquered}/{totalQuestions}</strong> ✓
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">⏱️</span>
            <span className="text-foreground">
              Time Taken: <strong className="text-primary">{timeTaken} minutes</strong>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <span className="text-foreground">
              Longest Streak: <strong className="text-accent">{longestStreak} in a row!</strong>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🎮</span>
            <span className="text-foreground">
              Fun Level: <strong className="text-secondary">MAXIMUM!</strong>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🌟</span>
            <span className="text-foreground">
              You're in <strong className="text-purple">top {percentile}%</strong> of your age!
            </span>
          </li>
        </ul>
      </div>

      {/* Trophy case */}
      <div className="comic-border-lg rounded-2xl bg-gradient-to-br from-secondary/20 to-purple/20 p-6">
        <h3 className="font-comic text-xl text-center mb-4 text-foreground">
          🏆 TROPHY CASE 🏆
        </h3>
        
        {/* Shelf visualization */}
        <div className="relative">
          {/* Shelf */}
          <div className="bg-gradient-to-b from-[#8B4513] to-[#654321] h-4 rounded-t-sm border-2 border-foreground" />
          
          {/* Trophies on shelf */}
          <div className="flex justify-around -mt-16 mb-4">
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: "0s" }}>
              <span className="text-4xl">🏆</span>
              <span className="font-comic text-xs text-foreground mt-1">CHAMP</span>
            </div>
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: "0.5s" }}>
              <span className="text-4xl">🥇</span>
              <span className="font-comic text-xs text-foreground mt-1">FIRST</span>
            </div>
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-4xl">🎖️</span>
              <span className="font-comic text-xs text-foreground mt-1">HERO</span>
            </div>
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="text-4xl">⭐</span>
              <span className="font-comic text-xs text-foreground mt-1">STAR</span>
            </div>
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: "2s" }}>
              <span className="text-4xl">🎯</span>
              <span className="font-comic text-xs text-foreground mt-1">ACE</span>
            </div>
          </div>
          
          {/* Second shelf */}
          <div className="bg-gradient-to-b from-[#8B4513] to-[#654321] h-4 rounded-t-sm border-2 border-foreground mt-2" />
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-4 right-4">
        <ActionWord word="EPIC" variant="zap" size="sm" />
      </div>
    </div>
  );
};
