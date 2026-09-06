import { ImageResponse } from "next/og";

export const alt = "STANCOMB — Technology, AI & Business Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090b",
          color: "#ebe6dc",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 28,
              height: 28,
              background: "#c4a35a",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ fontSize: 28, letterSpacing: 8 }}>STANCOMB</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 58, lineHeight: 1.1, maxWidth: 860 }}>
            Transformamos processos em sistemas inteligentes.
          </div>
          <div style={{ fontSize: 28, color: "#c4a35a" }}>
            From Compass to Code.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#8d939c", letterSpacing: 2 }}>
          Technology • AI • Engineering • Business Systems
        </div>
      </div>
    ),
    size,
  );
}
