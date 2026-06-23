"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eef4fa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem", maxWidth: 480 }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#d4a24d",
              marginBottom: "0.75rem",
            }}
          >
            Vetrivel Groups
          </p>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 600,
              color: "#071d4b",
              marginBottom: "1rem",
            }}
          >
            Something went wrong.
          </h1>
          <p style={{ color: "#475569", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            We&rsquo;re sorry for the inconvenience. Please try reloading the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              backgroundColor: "#001f60",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "0.75rem 1.75rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
