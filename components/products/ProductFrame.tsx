import { cn } from "@/lib/utils";

type ProductFrameProps = {
  product: string;
  page: string;
  nav: Array<{ label: string; active?: boolean; group?: string }>;
  accent?: "copper" | "wind";
  children: React.ReactNode;
  className?: string;
};

export function ProductFrame({
  product,
  page,
  nav,
  accent = "copper",
  children,
  className,
}: ProductFrameProps) {
  const active =
    accent === "wind"
      ? "bg-[#7c9cff]/16 text-[#9fb2ff]"
      : "bg-[#d18b47]/16 text-[#f2ae63]";

  return (
    <div
      className={cn(
        "overflow-hidden border border-white/16 bg-[#07111c] shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
        className,
      )}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-white/14 bg-[#050a12] px-3 py-2">
        <span className="size-2 rounded-full bg-[#ef4444]/80" />
        <span className="size-2 rounded-full bg-[#f59e0b]/80" />
        <span className="size-2 rounded-full bg-[#22c55e]/80" />
        <p className="ml-2 truncate font-mono text-[0.62rem] tracking-[0.12em] text-[#8b9bb0] uppercase">
          {product} · {page}
        </p>
      </div>
      <div className="grid min-h-[260px] grid-cols-[4.75rem_1fr] sm:min-h-[320px] sm:grid-cols-[7.5rem_1fr]">
        <aside className="border-r border-white/14 bg-[#050a12] px-2 py-3">
          <p className="mb-3 truncate px-1.5 font-mono text-[0.58rem] tracking-[0.16em] text-[#d18b47] uppercase">
            {product}
          </p>
          <ul className="space-y-0.5">
            {nav.map((item) => (
              <li key={item.label}>
                {item.group ? (
                  <p className="mt-2 mb-1 px-1.5 font-mono text-[0.5rem] tracking-[0.14em] text-[#9aabbf] uppercase">
                    {item.group}
                  </p>
                ) : null}
                <span
                  className={cn(
                    "block truncate rounded-sm px-1.5 py-1 text-[0.58rem] sm:text-[0.62rem]",
                    item.active ? active : "text-[#9aabbf]",
                  )}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </aside>
        <div className="@container min-w-0 bg-[#0d1724] p-2.5 sm:p-3">
          {children}
        </div>
      </div>
    </div>
  );
}
