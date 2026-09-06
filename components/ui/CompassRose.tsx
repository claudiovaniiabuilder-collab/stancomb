import { cn } from "@/lib/utils";

type CompassRoseProps = {
  className?: string;
  size?: number;
  decorative?: boolean;
};

export function CompassRose({
  className,
  size = 40,
  decorative = true,
}: CompassRoseProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      className={cn("aspect-square text-brass", className)}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : "Rosa dos ventos STANCOMB"}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="miter"
      strokeMiterlimit={8}
    >
      <path
        d="M40 4 L44.2 36.8 L40 40 L35.8 36.8 Z"
        strokeWidth="1.35"
      />
      <path
        d="M40 76 L35.8 43.2 L40 40 L44.2 43.2 Z"
        strokeWidth="1.35"
      />
      <path
        d="M76 40 L43.2 44.2 L40 40 L43.2 35.8 Z"
        strokeWidth="1.35"
      />
      <path
        d="M4 40 L36.8 35.8 L40 40 L36.8 44.2 Z"
        strokeWidth="1.35"
      />
      <path
        d="M63.5 16.5 L42.4 37.6 L40 40 L37.6 37.6 Z"
        strokeWidth="1.05"
        strokeOpacity="0.88"
      />
      <path
        d="M63.5 63.5 L42.4 42.4 L40 40 L42.4 37.6 Z"
        strokeWidth="1.05"
        strokeOpacity="0.88"
      />
      <path
        d="M16.5 63.5 L37.6 42.4 L40 40 L42.4 42.4 Z"
        strokeWidth="1.05"
        strokeOpacity="0.88"
      />
      <path
        d="M16.5 16.5 L37.6 37.6 L40 40 L37.6 42.4 Z"
        strokeWidth="1.05"
        strokeOpacity="0.88"
      />
    </svg>
  );
}
