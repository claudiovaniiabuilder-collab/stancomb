import { ProductFrame } from "@/components/products/ProductFrame";

const windNav = [
  { label: "Dashboard" },
  { label: "Quadro" },
  { label: "Minhas ações" },
  { label: "Reunião" },
  { label: "Relatórios" },
  { label: "Equipe" },
];

function Postit({
  title,
  owner,
  due,
  tone,
  badge,
}: {
  title: string;
  owner: string;
  due: string;
  tone: "open" | "progress" | "closed" | "overdue";
  badge?: string;
}) {
  const styles = {
    open: "bg-linear-to-br from-[#f8efae] to-[#eadf8d] text-[#2a2610]",
    progress: "bg-linear-to-br from-[#9fd4f3] to-[#6eb6e4] text-[#102433]",
    closed: "bg-linear-to-br from-[#b8e4b1] to-[#8fd089] text-[#143016]",
    overdue: "bg-linear-to-br from-[#f3a08f] to-[#e56b5c] text-[#3a1210]",
  } as const;

  return (
    <div
      className={`mb-1.5 rounded-2xl px-2.5 py-2 shadow-[0_8px_18px_rgba(0,0,0,0.22)] ${styles[tone]}`}
    >
      <div className="flex justify-between text-[0.48rem] font-semibold tracking-[0.08em] uppercase opacity-70">
        <span>{badge ?? "PRIORIDADE"}</span>
        <span>{due}</span>
      </div>
      <p className="mt-1 text-[0.68rem] leading-snug font-semibold">{title}</p>
      <p className="mt-1.5 text-[0.52rem] opacity-80">{owner}</p>
    </div>
  );
}

export function WindBoardScreen() {
  return (
    <ProductFrame
      product="Wind"
      page="Quadro Kanban"
      accent="wind"
      nav={windNav.map((item) =>
        item.label === "Quadro" ? { ...item, active: true } : item,
      )}
    >
      <div className="mb-2 flex gap-1.5 text-[0.5rem] text-[#b4c0ce]">
        <span className="rounded-full border border-white/16 px-2 py-0.5">
          Pessoa
        </span>
        <span className="rounded-full border border-white/16 px-2 py-0.5">
          Prazo
        </span>
        <span className="rounded-full border border-white/16 px-2 py-0.5">
          Prioridade
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 @xl:grid-cols-5">
        {[
          {
            name: "Backlog",
            count: 4,
            cards: [
              <Postit
                key="1"
                title="Mapear gargalo do pátio"
                owner="Ana"
                due="12/09"
                tone="open"
                badge="Média"
              />,
            ],
          },
          {
            name: "Planejado",
            count: 3,
            cards: [
              <Postit
                key="2"
                title="Checklist semanal de OS"
                owner="Carlos"
                due="Hoje"
                tone="open"
                badge="Alta"
              />,
            ],
          },
          {
            name: "Em andamento",
            count: 5,
            cards: [
              <Postit
                key="3"
                title="Fechar indicadores da reunião"
                owner="Marina"
                due="Hoje"
                tone="progress"
                badge="Alta"
              />,
            ],
          },
          {
            name: "Aguardando",
            count: 2,
            cards: [
              <Postit
                key="4"
                title="Aprovar peça da carreta"
                owner="Rafael"
                due="Atrasada"
                tone="overdue"
                badge="Crítica"
              />,
            ],
          },
          {
            name: "Concluído",
            count: 8,
            cards: [
              <Postit
                key="5"
                title="Atualizar responsáveis"
                owner="Lia"
                due="Ontem"
                tone="closed"
                badge="Baixa"
              />,
            ],
          },
        ].map((column) => (
          <section
            key={column.name}
            className="min-h-40 rounded-[20px] border border-white/14 bg-white/[0.025] p-2"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[0.52rem] tracking-[0.12em] text-[#b4c0ce] uppercase">
                {column.name}
              </span>
              <b className="text-[0.58rem] text-[#9fb2ff]">{column.count}</b>
            </div>
            {column.cards}
          </section>
        ))}
      </div>
    </ProductFrame>
  );
}

export function WindDashboardScreen() {
  const kpis = [
    ["Abertas", "36"],
    ["Concluídas", "21"],
    ["Atrasadas", "6"],
    ["Vencendo hoje", "4"],
    ["Sem atualização", "5"],
    ["Aging médio", "4,2d"],
    ["Conclusão", "74%"],
    ["No prazo", "81%"],
  ];

  return (
    <ProductFrame
      product="Wind"
      page="Dashboard gerencial"
      accent="wind"
      nav={windNav.map((item) =>
        item.label === "Dashboard" ? { ...item, active: true } : item,
      )}
    >
      <div className="grid grid-cols-4 gap-1.5">
        {kpis.map(([label, value], index) => (
          <div
            key={label}
            className={`rounded-2xl border border-white/14 bg-[#151b25]/80 px-2 py-2 ${
              index === 2 ? "border-[#ff6b6b]/35" : ""
            }`}
          >
            <p className="text-[0.5rem] text-[#b4c0ce]">{label}</p>
            <p
              className={`mt-1 font-mono text-sm ${
                index === 2 ? "text-[#ff6b6b]" : "text-[#f4f7fb]"
              }`}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2 grid gap-1.5 @md:grid-cols-2">
        <div className="rounded-2xl border border-white/14 p-2.5">
          <p className="mb-2 text-[0.68rem] text-[#f4f7fb]">Por prioridade</p>
          {[
            ["Crítica", "18%"],
            ["Alta", "42%"],
            ["Média", "28%"],
            ["Baixa", "12%"],
          ].map(([label, width]) => (
            <div
              key={label}
              className="mb-1.5 grid grid-cols-[70px_1fr_28px] items-center gap-2 text-[0.55rem]"
            >
              <span className="text-[#b4c0ce]">{label}</span>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/6">
                <div
                  className="h-full rounded-full bg-linear-to-r from-[#7c9cff] to-[#9fb2ff]"
                  style={{ width }}
                />
              </div>
              <strong className="text-right text-[#f4f7fb]">{width}</strong>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/14 p-2.5">
          <p className="mb-2 text-[0.68rem] text-[#f4f7fb]">Aging</p>
          {[
            ["0–3 normal", "16"],
            ["4–7 atenção", "9"],
            ["8–14 crítico", "7"],
            ["14+ severo", "4"],
          ].map(([label, count]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-white/6 py-1.5 text-[0.58rem] last:border-0"
            >
              <span className="text-[#b4c0ce]">{label}</span>
              <strong className="text-[#9fb2ff]">{count}</strong>
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
}

export function WindActionsScreen() {
  const groups = [
    {
      title: "Atrasadas",
      items: ["Aprovar peça da carreta", "Enviar POD da viagem 2041"],
      tone: "text-[#ff6b6b]",
    },
    {
      title: "Vencendo hoje",
      items: ["Fechar indicadores da reunião", "Checklist semanal de OS"],
      tone: "text-[#f0b429]",
    },
    {
      title: "Esta semana",
      items: ["Mapear gargalo do pátio", "Atualizar responsáveis da equipe"],
      tone: "text-[#9fb2ff]",
    },
  ];

  return (
    <ProductFrame
      product="Wind"
      page="Minhas ações · Reunião"
      accent="wind"
      nav={windNav.map((item) =>
        item.label === "Minhas ações" ? { ...item, active: true } : item,
      )}
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[0.62rem] text-[#b4c0ce]">Modo reunião · terça 09:00</p>
        <span className="rounded-full bg-[#7c9cff] px-2 py-0.5 text-[0.5rem] font-semibold text-[#0b0e13]">
          Tela cheia
        </span>
      </div>
      <div className="grid gap-1.5 @md:grid-cols-3">
        {groups.map((group) => (
          <section
            key={group.title}
            className="min-h-36 rounded-[20px] border border-white/14 bg-white/[0.025] p-2.5"
          >
            <p className={`mb-2 text-[0.62rem] font-semibold ${group.tone}`}>
              {group.title}
            </p>
            {group.items.map((item) => (
              <div
                key={item}
                className="mb-1.5 rounded-xl bg-[#f8efae] px-2 py-2 text-[#2a2610] last:mb-0"
              >
                <p className="text-[0.62rem] font-semibold">{item}</p>
                <p className="mt-1 text-[0.5rem] opacity-70">Você · prazo visível</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </ProductFrame>
  );
}

export function WindAlertsScreen() {
  return (
    <ProductFrame
      product="Wind"
      page="Alertas · Relatórios"
      accent="wind"
      nav={windNav.map((item) =>
        item.label === "Relatórios" ? { ...item, active: true } : item,
      )}
    >
      <div className="grid gap-1.5 @md:grid-cols-3">
        <div className="rounded-2xl border border-[#ff6b6b]/35 bg-[#151b25]/80 p-2.5">
          <p className="text-[0.5rem] text-[#b4c0ce]">Atrasadas</p>
          <p className="mt-1 font-mono text-lg text-[#ff6b6b]">6</p>
          <p className="mt-2 text-[0.52rem] text-[#b4c0ce]">
            Aprovar peça da carreta · Rafael
          </p>
        </div>
        <div className="rounded-2xl border border-white/14 bg-[#151b25]/80 p-2.5">
          <p className="text-[0.5rem] text-[#b4c0ce]">Sem atualização</p>
          <p className="mt-1 font-mono text-lg text-[#f0b429]">5</p>
          <p className="mt-2 text-[0.52rem] text-[#b4c0ce]">
            Aging médio 4,2 dias
          </p>
        </div>
        <div className="rounded-2xl border border-white/14 bg-[#151b25]/80 p-2.5">
          <p className="text-[0.5rem] text-[#b4c0ce]">No prazo</p>
          <p className="mt-1 font-mono text-lg text-[#8fd089]">81%</p>
          <p className="mt-2 text-[0.52rem] text-[#b4c0ce]">
            Relatório da semana pronto
          </p>
        </div>
      </div>
      <div className="mt-2 overflow-hidden rounded-2xl border border-white/14">
        <div className="grid grid-cols-4 border-b border-white/14 px-2 py-1 font-mono text-[0.48rem] tracking-[0.1em] text-[#9aabbf] uppercase">
          <span>Ação</span>
          <span>Dono</span>
          <span>Prazo</span>
          <span>Aging</span>
        </div>
        {[
          ["Aprovar peça da carreta", "Rafael", "Atrasada", "8d"],
          ["Fechar indicadores", "Marina", "Hoje", "2d"],
          ["Checklist semanal de OS", "Carlos", "Hoje", "3d"],
        ].map(([action, owner, due, aging]) => (
          <div
            key={action}
            className="grid grid-cols-4 border-b border-white/6 px-2 py-1.5 text-[0.55rem] last:border-0"
          >
            <span className="truncate text-[#f4f7fb]">{action}</span>
            <span className="text-[#b4c0ce]">{owner}</span>
            <span className="text-[#f0b429]">{due}</span>
            <span className="font-mono text-[#9fb2ff]">{aging}</span>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}
