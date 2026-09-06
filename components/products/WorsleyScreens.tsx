import { ProductFrame } from "@/components/products/ProductFrame";

const worsleyNav = [
  { label: "Dashboard", active: false },
  { group: "Operação", label: "Torre" },
  { label: "Pátio" },
  { group: "Frota", label: "Ativos" },
  { label: "Viagens" },
  { label: "Combustível" },
  { group: "Manutenção", label: "OS" },
  { label: "Checklists" },
];

function Kpi({
  label,
  value,
  hint,
  tone = "default",
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "default" | "ok" | "warn" | "danger";
}) {
  const color =
    tone === "ok"
      ? "text-[#22c55e]"
      : tone === "warn"
        ? "text-[#f59e0b]"
        : tone === "danger"
          ? "text-[#ef4444]"
          : "text-[#e6edf5]";

  return (
    <div className="border border-white/14 bg-[#111e2d] px-2 py-1.5">
      <p className="font-mono text-[0.48rem] tracking-[0.08em] text-[#8b9bb0] uppercase">
        {label}
      </p>
      <p className={`mt-0.5 font-mono text-sm leading-none ${color}`}>{value}</p>
      {hint ? <p className="mt-1 text-[0.5rem] text-[#8b9bb0]">{hint}</p> : null}
    </div>
  );
}

function Panel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-white/14 bg-[#111e2d] ${className}`}>
      <div className="flex items-center justify-between border-b border-white/14 px-2 py-1.5">
        <p className="text-[0.62rem] font-medium text-[#e6edf5]">{title}</p>
        <span className="font-mono text-[0.48rem] text-[#d18b47] uppercase">
          Ver todos
        </span>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}

export function WorsleyDashboardScreen() {
  return (
    <ProductFrame
      product="Worsley"
      page="Cockpit operacional"
      nav={worsleyNav.map((item) =>
        item.label === "Dashboard" ? { ...item, active: true } : item,
      )}
    >
      <div className="grid grid-cols-3 gap-1.5 @lg:grid-cols-6">
        <Kpi label="Ativos" value="128" hint="100% da frota" />
        <Kpi label="Em operação" value="97" hint="75,8%" tone="ok" />
        <Kpi label="Manutenção" value="18" hint="14,1%" tone="warn" />
        <Kpi label="Indisponíveis" value="4" hint="3,1%" tone="danger" />
        <Kpi label="Checklists" value="42" hint="Pendentes: 6" tone="warn" />
        <Kpi label="Viagens hoje" value="31" hint="Em execução: 12" />
      </div>
      <div className="mt-1.5 grid gap-1.5 @md:grid-cols-2 @xl:grid-cols-4">
        <Panel title="Disponibilidade da frota">
          <div className="flex items-center gap-3">
            <div className="relative size-14 shrink-0 rounded-full border-[5px] border-[#22c55e] border-r-[#f59e0b] border-b-[#ef4444]" />
            <div>
              <p className="font-mono text-lg leading-none text-[#e6edf5]">
                82,8%
              </p>
              <p className="mt-1 text-[0.5rem] text-[#8b9bb0]">disponível</p>
            </div>
          </div>
        </Panel>
        <Panel title="Custos — mês atual">
          <p className="font-mono text-sm text-[#e6edf5]">R$ 486.210</p>
          {[
            ["Combustível", "58%"],
            ["Manutenção", "27%"],
            ["Pneus", "15%"],
          ].map(([label, value]) => (
            <div key={label} className="mt-1.5">
              <div className="mb-0.5 flex justify-between text-[0.5rem] text-[#8b9bb0]">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-1 bg-white/8">
                <div
                  className="h-full bg-[#d18b47]"
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </Panel>
        <Panel title="Maior custo/km">
          {[
            ["ABC-1D23", "4,82"],
            ["EFG-4H56", "4,41"],
            ["IJK-7L89", "3,96"],
          ].map(([plate, value], index) => (
            <div
              key={plate}
              className="flex items-center justify-between border-b border-white/6 py-1 text-[0.58rem] last:border-0"
            >
              <span className="text-[#8b9bb0]">{index + 1}</span>
              <span className="flex-1 px-2 text-[#e6edf5]">{plate}</span>
              <span className="font-mono text-[#f2ae63]">{value}</span>
            </div>
          ))}
        </Panel>
        <Panel title="Alertas críticos" className="border-[#ef4444]/35">
          {[
            ["Manutenções vencidas", "7"],
            ["Checklists críticos", "3"],
            ["Docs a vencer", "5"],
            ["Dispositivos offline", "2"],
          ].map(([label, count]) => (
            <div
              key={label}
              className="mb-1 flex items-center justify-between border border-[#ef4444]/20 bg-[#07111c] px-1.5 py-1 last:mb-0"
            >
              <span className="text-[0.55rem] text-[#e6edf5]">{label}</span>
              <span className="font-mono text-[0.58rem] text-[#ef4444]">
                {count}
              </span>
            </div>
          ))}
        </Panel>
      </div>
    </ProductFrame>
  );
}

export function WorsleyTowerScreen() {
  const rows = [
    ["ABC-1D23", "SP → CAMP", "Doca 04", "Em doca", "ok"],
    ["EFG-4H56", "CAMP → RJ", "Fila 02", "Atraso 18m", "delay"],
    ["IJK-7L89", "GRU → VCP", "Rota", "Em trânsito", "op"],
    ["MNO-0P12", "VCP → SSZ", "Portaria", "Chegada", "warn"],
    ["QRS-3T45", "SSZ → SP", "Cliente", "Descarga", "ok"],
  ] as const;

  const tone = {
    ok: "text-[#22c55e]",
    delay: "text-[#f97316]",
    op: "text-[#3b82f6]",
    warn: "text-[#eab308]",
  };

  return (
    <ProductFrame
      product="Worsley"
      page="Torre de controle"
      accent="copper"
      nav={worsleyNav.map((item) =>
        item.label === "Torre" ? { ...item, active: true } : item,
      )}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="font-mono text-[0.62rem] tracking-[0.16em] text-[#22d3ee] uppercase">
          LIVE · 14:32:08
        </p>
        <div className="flex gap-1.5 text-[0.48rem] text-[#8b9bb0] uppercase">
          <span>Normal</span>
          <span className="text-[#eab308]">Atenção</span>
          <span className="text-[#f97316]">Atraso</span>
          <span className="text-[#ef4444]">Crítico</span>
        </div>
      </div>
      <div className="grid gap-1.5 @lg:grid-cols-[1.4fr_0.8fr]">
        <div className="overflow-hidden border border-white/14 bg-[#05070c]">
          <div className="grid grid-cols-5 border-b border-white/14 px-2 py-1 font-mono text-[0.48rem] tracking-[0.12em] text-[#9aabbf] uppercase">
            <span>Ativo</span>
            <span>Rota</span>
            <span>Posição</span>
            <span>Status</span>
            <span>ETA</span>
          </div>
          {rows.map(([asset, route, place, status, key]) => (
            <div
              key={asset}
              className="grid grid-cols-5 border-b border-white/6 px-2 py-1.5 font-mono text-[0.58rem] last:border-0"
            >
              <span className="text-[#e6edf5]">{asset}</span>
              <span className="truncate text-[#8b9bb0]">{route}</span>
              <span className="text-[#8b9bb0]">{place}</span>
              <span className={tone[key]}>{status}</span>
              <span className="text-[#e6edf5]">16:10</span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <Panel title="Problemas críticos">
            {[
              "Permanência excessiva · Doca 02",
              "Veículo parado · 47 min",
              "Entrega sem POD · IJK-7L89",
            ].map((item) => (
              <p
                key={item}
                className="mb-1 border border-[#ef4444]/25 bg-[#07111c] px-1.5 py-1 text-[0.55rem] text-[#fca5a5] last:mb-0"
              >
                {item}
              </p>
            ))}
          </Panel>
          <Panel title="Pátio / docas">
            <div className="grid grid-cols-3 gap-1">
              {["04 livre", "02 ocup.", "01 fila"].map((item) => (
                <div
                  key={item}
                  className="bg-[#07111c] px-1 py-2 text-center font-mono text-[0.52rem] text-[#8b9bb0]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </ProductFrame>
  );
}

export function WorsleyAssetsScreen() {
  const assets = [
    ["ABC-1D23", "Cavalo", "Em operação", "ok", "OS-2041"],
    ["EFG-4H56", "Carreta", "Manutenção", "warn", "OS-2048"],
    ["IJK-7L89", "VUC", "Disponível", "ok", "—"],
    ["MNO-0P12", "Empilhadeira", "Indisponível", "danger", "OS-2052"],
    ["QRS-3T45", "Van", "Em operação", "ok", "—"],
  ] as const;

  return (
    <ProductFrame
      product="Worsley"
      page="Ativos e manutenção"
      nav={worsleyNav.map((item) =>
        item.label === "Ativos" ? { ...item, active: true } : item,
      )}
    >
      <div className="mb-2 grid grid-cols-3 gap-1.5">
        <Kpi label="Preventivas vencidas" value="7" tone="danger" />
        <Kpi label="OS em execução" value="11" tone="warn" />
        <Kpi label="Aguardando peças" value="3" tone="warn" />
      </div>
      <div className="overflow-hidden border border-white/14">
        <div className="grid grid-cols-5 border-b border-white/14 bg-[#111e2d] px-2 py-1 font-mono text-[0.48rem] tracking-[0.1em] text-[#9aabbf] uppercase">
          <span>Código</span>
          <span>Tipo</span>
          <span>Status</span>
          <span>OS</span>
          <span>Medição</span>
        </div>
        {assets.map(([code, type, status, tone, os]) => (
          <div
            key={code}
            className="grid grid-cols-5 border-b border-white/6 px-2 py-1.5 text-[0.58rem] last:border-0"
          >
            <span className="font-mono text-[#e6edf5]">{code}</span>
            <span className="text-[#8b9bb0]">{type}</span>
            <span
              className={
                tone === "ok"
                  ? "text-[#22c55e]"
                  : tone === "warn"
                    ? "text-[#f59e0b]"
                    : "text-[#ef4444]"
              }
            >
              {status}
            </span>
            <span className="font-mono text-[#d18b47]">{os}</span>
            <span className="font-mono text-[#8b9bb0]">142.380 km</span>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}

export function WorsleyTrackingScreen() {
  const rows = [
    ["ABC-1D23", "SP → CAMP", "Em rota", "12 min"],
    ["EFG-4H56", "CAMP → RJ", "Parado 18m", "—"],
    ["IJK-7L89", "GRU → VCP", "Chegada", "04 min"],
    ["MNO-0P12", "VCP → SSZ", "Desvio", "22 min"],
  ] as const;

  return (
    <ProductFrame
      product="Worsley"
      page="Tracking"
      accent="copper"
      nav={worsleyNav.map((item) =>
        item.label === "Viagens" ? { ...item, active: true } : item,
      )}
    >
      <div className="grid gap-1.5 @lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-40 overflow-hidden border border-white/14 bg-[#05070c]">
          <div className="absolute inset-3 border border-dashed border-[#22d3ee]/25" />
          <p className="absolute top-3 left-3 font-mono text-[0.52rem] tracking-[0.16em] text-[#22d3ee] uppercase">
            MAP · LIVE
          </p>
          <div className="absolute top-1/3 left-1/4 size-2 rounded-full bg-[#22c55e] shadow-[0_0_10px_#22c55e]" />
          <div className="absolute top-1/2 left-1/2 size-2 rounded-full bg-[#f97316] shadow-[0_0_10px_#f97316]" />
          <div className="absolute right-1/4 bottom-1/3 size-2 rounded-full bg-[#3b82f6]" />
          <p className="absolute right-3 bottom-3 font-mono text-[0.48rem] text-[#8b9bb0]">
            LAT -23.55 · LNG -46.63
          </p>
        </div>
        <div className="overflow-hidden border border-white/14">
          <div className="grid grid-cols-4 border-b border-white/14 px-2 py-1 font-mono text-[0.48rem] tracking-[0.1em] text-[#9aabbf] uppercase">
            <span>Ativo</span>
            <span>Rota</span>
            <span>Status</span>
            <span>ETA</span>
          </div>
          {rows.map(([asset, route, status, eta]) => (
            <div
              key={asset}
              className="grid grid-cols-4 border-b border-white/6 px-2 py-1.5 font-mono text-[0.55rem] last:border-0"
            >
              <span className="text-[#e6edf5]">{asset}</span>
              <span className="truncate text-[#8b9bb0]">{route}</span>
              <span className="text-[#f2ae63]">{status}</span>
              <span className="text-[#e6edf5]">{eta}</span>
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
}

export function WorsleyAnalyticsScreen() {
  return (
    <ProductFrame
      product="Worsley"
      page="Analytics"
      nav={worsleyNav.map((item) =>
        item.label === "Dashboard" ? { ...item, active: true } : item,
      )}
    >
      <div className="grid grid-cols-2 gap-1.5 @lg:grid-cols-4">
        <Kpi label="Disponibilidade" value="82,8%" hint="frota do dia" tone="ok" />
        <Kpi label="Custo / km" value="3,41" hint="mês atual" />
        <Kpi label="Consumo" value="2,18 km/l" hint="média ponderada" />
        <Kpi label="OS abertas" value="11" hint="preventiva 7" tone="warn" />
      </div>
      <div className="mt-1.5 grid gap-1.5 @md:grid-cols-2">
        <Panel title="Custo por natureza">
          {[
            ["Combustível", "58%"],
            ["Manutenção", "27%"],
            ["Pneus", "15%"],
          ].map(([label, value]) => (
            <div key={label} className="mt-1.5">
              <div className="mb-0.5 flex justify-between text-[0.5rem] text-[#8b9bb0]">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-1 bg-white/8">
                <div className="h-full bg-[#d18b47]" style={{ width: value }} />
              </div>
            </div>
          ))}
        </Panel>
        <Panel title="Utilização da semana">
          {["Seg", "Ter", "Qua", "Qui", "Sex"].map((day, index) => (
            <div key={day} className="mt-1.5 flex items-end gap-2">
              <span className="w-8 text-[0.5rem] text-[#8b9bb0]">{day}</span>
              <div
                className="h-2 bg-[#22d3ee]/70"
                style={{ width: `${46 + index * 8}%` }}
              />
            </div>
          ))}
        </Panel>
      </div>
    </ProductFrame>
  );
}

export function WorsleyAiScreen() {
  return (
    <ProductFrame
      product="Worsley"
      page="Worsley AI"
      nav={worsleyNav.map((item) =>
        item.label === "Dashboard" ? { ...item, active: true } : item,
      )}
    >
      <div className="grid min-h-44 gap-1.5 @lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-white/14 bg-[#05070c] p-3">
          <p className="font-mono text-[0.52rem] tracking-[0.16em] text-[#22d3ee] uppercase">
            Consulta
          </p>
          <p className="mt-3 text-[0.68rem] text-[#e6edf5]">
            Quais veículos estão com preventiva vencida?
          </p>
          <p className="mt-4 border-t border-white/10 pt-3 text-[0.62rem] leading-relaxed text-[#8b9bb0]">
            7 ativos com preventiva vencida. 4 em operação e 3 parados. O maior
            risco agora é EFG-4H56, com OS-2048 aberta.
          </p>
        </div>
        <Panel title="Alertas da operação">
          {[
            "Preventiva vencida · 7 ativos",
            "Veículo parado acima de 40 min",
            "Consumo fora da faixa · ABC-1D23",
          ].map((item) => (
            <p
              key={item}
              className="mb-1 border border-[#d18b47]/25 bg-[#07111c] px-1.5 py-1.5 text-[0.55rem] text-[#f2ae63] last:mb-0"
            >
              {item}
            </p>
          ))}
        </Panel>
      </div>
    </ProductFrame>
  );
}
