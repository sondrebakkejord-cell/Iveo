import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Iveo — moderne nettsider for norske bedrifter";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #fafbff 0%, #e0e7ff 100%)",
          padding: "80px",
          fontFamily: "system-ui",
        }}
      >
        {/* Logo orbit symbol */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "48px",
              fontWeight: 900,
            }}
          >
            ↑
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "56px", fontWeight: 800, color: "#0a0e1a", letterSpacing: "-0.03em" }}>
              iveo
            </span>
            <span style={{ fontSize: "16px", fontWeight: 600, color: "#64748b", letterSpacing: "0.3em" }}>
              N · O · R · W · A · Y
            </span>
          </div>
        </div>

        <div
          style={{
            fontSize: "84px",
            fontWeight: 800,
            color: "#0a0e1a",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          <span>Nettsider som</span>
          <span>jobber for deg.</span>
        </div>

        <div
          style={{
            fontSize: "32px",
            color: "#475569",
            lineHeight: 1.3,
            display: "flex",
            maxWidth: "900px",
          }}
        >
          Far-og-sønn-team i Norge. Levert på én uke fra 1 990 kr.
        </div>
      </div>
    ),
    { ...size }
  );
}
