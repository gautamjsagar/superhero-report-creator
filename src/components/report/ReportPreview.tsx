import { useState } from "react";
import { CoverPage } from "./CoverPage";
import { SuperpowersPage } from "./SuperpowersPage";
import { AchievementsPage } from "./AchievementsPage";
import { cn } from "@/lib/utils";
import collegixLogo from "@/assets/collegix-logo.png";

export const ReportPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      name: "Cover",
      component: (
        <CoverPage
          userName="Alex Champion"
          codeName="The Balanced Builder"
          missionDate="Dec 7, 2024"
          heroType="detective"
        />
      ),
    },
    {
      name: "Superpowers",
      component: (
        <SuperpowersPage
          brainPower={47}
          creativityMagic={38}
          teamSpirit={43}
        />
      ),
    },
    {
      name: "Achievements",
      component: (
        <AchievementsPage
          questionsConquered={20}
          totalQuestions={20}
          timeTaken={8}
          longestStreak={7}
          percentile={15}
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8">
      <div className="container mx-auto px-4">
        {/* Header with logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={collegixLogo} alt="Collegix.io" className="h-16 w-16 object-contain" />
            <h1 className="font-comic text-5xl text-foreground">
              SUPERHERO DISCOVERY REPORT
            </h1>
          </div>
          <p className="font-body text-muted-foreground text-lg">
            Age 10-13 • Comic Book Style
          </p>
        </div>

        {/* Page navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {pages.map((page, index) => (
            <button
              key={page.name}
              onClick={() => setCurrentPage(index)}
              className={cn(
                "font-comic text-lg px-6 py-3 rounded-lg border-3 border-foreground transition-all",
                currentPage === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-muted"
              )}
              style={{ boxShadow: currentPage === index ? "4px 4px 0px hsl(220 20% 15%)" : "2px 2px 0px hsl(220 20% 15%)" }}
            >
              Page {index + 1}: {page.name}
            </button>
          ))}
        </div>

        {/* Page preview */}
        <div className="flex justify-center">
          <div className="transform scale-[0.7] md:scale-[0.85] lg:scale-100 origin-top shadow-2xl rounded-lg overflow-hidden border-4 border-foreground">
            {pages[currentPage].component}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-8 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className={cn(
              "font-comic text-2xl px-6 py-3 rounded-lg border-3 border-foreground",
              currentPage === 0
                ? "opacity-50 cursor-not-allowed bg-muted text-muted-foreground"
                : "bg-accent text-accent-foreground hover:scale-105 transition-transform"
            )}
            style={{ boxShadow: "3px 3px 0px hsl(220 20% 15%)" }}
          >
            ← PREV
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1))}
            disabled={currentPage === pages.length - 1}
            className={cn(
              "font-comic text-2xl px-6 py-3 rounded-lg border-3 border-foreground",
              currentPage === pages.length - 1
                ? "opacity-50 cursor-not-allowed bg-muted text-muted-foreground"
                : "bg-success text-success-foreground hover:scale-105 transition-transform"
            )}
            style={{ boxShadow: "3px 3px 0px hsl(220 20% 15%)" }}
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
};
