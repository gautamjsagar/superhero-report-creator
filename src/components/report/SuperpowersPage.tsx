import { Badge } from "./Badge";
import { PowerCard } from "./PowerCard";
import { RadarChart } from "./RadarChart";
import { ActionWord } from "./ActionWord";
import { PageFooter } from "./PageFooter";

interface SuperpowersPageProps {
  brainPower: number;
  creativityMagic: number;
  teamSpirit: number;
}

export const SuperpowersPage = ({
  brainPower,
  creativityMagic,
  teamSpirit,
}: SuperpowersPageProps) => {
  const radarData = [
    { label: "BRAIN", value: brainPower, icon: "🧠" },
    { label: "CREATE", value: creativityMagic, icon: "🎨" },
    { label: "TEAM", value: teamSpirit, icon: "🤝" },
  ];

  return (
    <div className="page-a4 halftone flex flex-col relative">
      {/* Corner decoration */}
      <div className="absolute top-4 right-4">
        <ActionWord word="BAM" variant="bam" size="sm" />
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="font-comic text-4xl text-foreground flex items-center gap-3">
          💪 YOUR SUPERPOWERS REVEALED!
        </h2>
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-2" />
      </div>

      {/* Badge row */}
      <div className="flex justify-center gap-6 mb-8">
        <Badge icon="🧠" label="BRAIN" sublabel="POWER" color="blue" size="md" />
        <Badge icon="🎨" label="CREATE" sublabel="MAGIC" color="yellow" size="md" />
        <Badge icon="🤝" label="TEAM" sublabel="SPIRIT" color="red" size="md" />
      </div>

      {/* Power cards */}
      <div className="space-y-5 mb-8">
        <PowerCard
          icon="🧠"
          title="BRAIN POWER"
          percentage={brainPower}
          description="You're like a detective solving mysteries! 🔍"
          color="blue"
        />
        <PowerCard
          icon="🎨"
          title="CREATIVITY MAGIC"
          percentage={creativityMagic}
          description="You can imagine amazing new ideas and inventions!"
          color="yellow"
        />
        <PowerCard
          icon="🤝"
          title="TEAM SPIRIT"
          percentage={teamSpirit}
          description="You're great at making friends and working together!"
          color="red"
        />
      </div>

      {/* Radar chart */}
      <div className="flex justify-center">
        <div className="comic-card p-4 bg-card/80">
          <h3 className="font-comic text-xl text-center mb-4 text-foreground">
            ⚡ POWER METER ⚡
          </h3>
          <RadarChart data={radarData} size={200} />
        </div>
      </div>

      {/* Footer */}
      <PageFooter pageNumber={2} totalPages={3} />
    </div>
  );
};
