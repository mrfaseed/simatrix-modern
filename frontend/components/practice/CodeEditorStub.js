"use client";

import { useState } from "react";

export default function CodeEditorStub({ initialCode, language = "python", problemTitle }) {
  const [code, setCode] = useState(initialCode || `# Solution for ${problemTitle || 'Challenge'}\ndef solution():\n    # Write your code here\n    pass\n`);
  const [output, setOutput] = useState("Run your code to see test results...");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("Running test cases against execution sandbox...\n");
    setTimeout(() => {
      setOutput("✓ Test Case 1 Passed: Expected [0, 1], Got [0, 1] (12ms)\n✓ Test Case 2 Passed: Expected [1, 2], Got [1, 2] (15ms)\n✓ Test Case 3 (Hidden) Passed\n\n🎉 ALL TESTS PASSED! +50 XP Earned!");
      setIsRunning(false);
    }, 800);
  };

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: "20px",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-subtle)",
      background: "var(--bg-surface)",
      overflow: "hidden",
      minHeight: "500px",
    }}>
      {/* Code Editor Panel */}
      <div style={{ display: "flex", flexDirection: "column", borderRight: "1px solid var(--border-subtle)" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 16px",
          background: "rgba(255, 255, 255, 0.03)",
          borderBottom: "1px solid var(--border-subtle)",
        }}>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-cyan)" }}>
            ⚡ {language.toUpperCase()} EDITOR
          </span>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="btn btn-glow btn-sm"
              style={{ padding: "6px 14px", fontSize: "0.8rem" }}
            >
              {isRunning ? "Testing..." : "▶ Run Tests"}
            </button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          style={{
            flexGrow: 1,
            width: "100%",
            background: "#080b11",
            color: "#e2e8f0",
            fontFamily: "var(--font-mono)",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            padding: "16px",
            border: "none",
            outline: "none",
            resize: "none",
          }}
        />
      </div>

      {/* Output Console Panel */}
      <div style={{ display: "flex", flexDirection: "column", background: "#05070a" }}>
        <div style={{
          padding: "10px 16px",
          background: "rgba(255, 255, 255, 0.03)",
          borderBottom: "1px solid var(--border-subtle)",
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "var(--text-secondary)",
        }}>
          🖥️ TEST RUNNER & CONSOLE OUTPUT
        </div>
        <pre style={{
          flexGrow: 1,
          padding: "16px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.88rem",
          color: "#94a3b8",
          whiteSpace: "pre-wrap",
          overflowY: "auto",
        }}>
          {output}
        </pre>
      </div>
    </div>
  );
}
