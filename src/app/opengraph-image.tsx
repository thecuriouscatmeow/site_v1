import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saahil Basak — Backend & Systems Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#FAF9F6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#111111",
            fontSize: "80px",
            fontWeight: 300,
            lineHeight: 1.1,
            textAlign: "center",
            letterSpacing: "-1px",
          }}
        >
          Saahil Basak
        </div>
        <div
          style={{
            width: "64px",
            height: "1px",
            backgroundColor: "#E0DED8",
            margin: "32px auto",
          }}
        />
        <div
          style={{
            color: "#6B6B6B",
            fontSize: "24px",
            textTransform: "uppercase",
            letterSpacing: "4px",
            textAlign: "center",
          }}
        >
          Backend &amp; Systems Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
