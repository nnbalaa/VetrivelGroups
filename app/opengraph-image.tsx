import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #001f60 0%, #071d4b 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              color: "#d4a24d",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <span style={{ color: "white", fontSize: 30, fontWeight: 600 }}>
            {site.name}
          </span>
        </div>
        <div
          style={{
            color: "white",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Driving Innovation.{" "}
          <span style={{ color: "#d4a24d" }}>Delivering Excellence.</span> Creating
          Value.
        </div>
        <div
          style={{
            marginTop: 28,
            color: "rgba(255,255,255,0.65)",
            fontSize: 24,
            fontFamily: "system-ui, sans-serif",
            maxWidth: 820,
            lineHeight: 1.5,
          }}
        >
          A diversified Chennai enterprise across engineering, manufacturing,
          hospitality, and creative services.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
