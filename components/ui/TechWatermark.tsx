"use client";

import {
  WorsleyDashboardScreen,
  WorsleyTowerScreen,
  WorsleyTrackingScreen,
} from "@/components/products/WorsleyScreens";
import {
  WindActionsScreen,
  WindBoardScreen,
  WindDashboardScreen,
} from "@/components/products/WindScreens";

const scenes = [
  {
    id: "worsley-tower",
    product: "Worsley",
    page: "Torre de controle",
    Screen: WorsleyTowerScreen,
    motion: "watermark-drift-1",
    className:
      "top-1/2 left-1/2 z-[2] w-[min(52%,680px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.32]",
  },
  {
    id: "worsley-cockpit",
    product: "Worsley",
    page: "Cockpit",
    Screen: WorsleyDashboardScreen,
    motion: "watermark-drift-2",
    className:
      "top-[3%] left-[1%] w-[min(36%,460px)] -rotate-3 opacity-[0.2]",
  },
  {
    id: "wind-board",
    product: "Wind",
    page: "Kanban",
    Screen: WindBoardScreen,
    motion: "watermark-drift-3",
    className:
      "top-[6%] right-[1%] w-[min(34%,440px)] rotate-[4deg] opacity-[0.2]",
  },
  {
    id: "worsley-tracking",
    product: "Worsley",
    page: "Tracking",
    Screen: WorsleyTrackingScreen,
    motion: "watermark-drift-4",
    className:
      "bottom-[5%] left-[3%] w-[min(36%,460px)] rotate-[3deg] opacity-[0.18]",
  },
  {
    id: "wind-dashboard",
    product: "Wind",
    page: "Dashboard",
    Screen: WindDashboardScreen,
    motion: "watermark-drift-5",
    className:
      "right-[2%] bottom-[4%] w-[min(34%,440px)] -rotate-2 opacity-[0.18]",
  },
  {
    id: "wind-actions",
    product: "Wind",
    page: "Minhas ações",
    Screen: WindActionsScreen,
    motion: "watermark-drift-6",
    className:
      "top-[18%] left-[18%] hidden w-[min(28%,360px)] rotate-1 opacity-[0.16] xl:block",
  },
] as const;

export function TechWatermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden print-hide"
      aria-hidden
    >
      <div className="absolute inset-0 technical-grid opacity-40" />
      <div className="absolute inset-0 radial-fade" />

      <div className="absolute inset-0 hidden items-center justify-center md:flex">
        <div className="watermark-field relative h-[min(88vh,920px)] w-[min(94vw,1320px)] [mask-image:radial-gradient(ellipse_72%_68%_at_50%_48%,black_18%,transparent_78%)]">
          {scenes.map((scene) => {
            const Screen = scene.Screen;

            return (
              <div key={scene.id} className={`absolute ${scene.className}`}>
                <div className={scene.motion}>
                  <p className="mb-1.5 font-mono text-[0.52rem] tracking-[0.2em] text-brass uppercase">
                    {scene.product} · {scene.page}
                  </p>
                  <Screen />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
