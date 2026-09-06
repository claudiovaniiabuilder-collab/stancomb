import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Image
      src="/logo-stancomb.png"
      alt="STANCOMB — Technology & Systems"
      width={compact ? 220 : 720}
      height={compact ? 220 : 720}
      className={cn(
        "logo-mark w-auto object-contain",
        className?.includes("h-")
          ? ""
          : compact
            ? "h-12 sm:h-14"
            : "h-28 sm:h-36",
        className,
      )}
      priority
    />
  );
}
