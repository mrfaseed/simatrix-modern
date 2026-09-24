"use client";

import Button from "@/components/common/Button";

export default function Error({ error, reset }) {
  return (
    <div className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div style={{ fontSize: "4rem", marginBottom: "16px" }}>⚠️</div>
        <h1 style={{ fontSize: "2rem", color: "var(--text-primary)", marginBottom: "12px" }}>Something went wrong!</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "28px" }}>
          {error?.message || "An unexpected error occurred in the execution sandbox."}
        </p>
        <Button onClick={() => reset()} variant="primary" size="lg">
          Try Again
        </Button>
      </div>
    </div>
  );
}
