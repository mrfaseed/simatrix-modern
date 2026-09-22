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
      const trimmed = (code || "").trim();
      if (!trimmed) {
        setOutput("❌ SYNTAX / EXECUTION ERROR:\nCode buffer is empty. Please write your solution before running tests.");
        setIsRunning(false);
        return;
      }

      const langLower = language.toLowerCase();
      let isValid = true;
      let errorMsg = "";

      if (langLower === "python" && !trimmed.includes("def") && !trimmed.includes("return")) {
        isValid = false;
        errorMsg = "❌ TEST FAILED: IndentationError / NameError\nNo function definition or return statement detected in Python code.";
      } else if (langLower === "sql" && !trimmed.toLowerCase().includes("select")) {
        isValid = false;
        errorMsg = "❌ SQL SYNTAX ERROR: Near line 1\nQuery must contain a valid SELECT statement.";
      } else if ((langLower === "javascript" || langLower === "js") && !trimmed.includes("function") && !trimmed.includes("const") && !trimmed.includes("return")) {
        isValid = false;
        errorMsg = "❌ REFERENCE ERROR:\nUndefined function block or return statement in JavaScript environment.";
      }

      if (!isValid) {
        setOutput(errorMsg);
      } else {
        setOutput("✓ Test Case 1 Passed: Expected Output Verified (12ms)\n✓ Test Case 2 Passed: Edge Case Validation Passed (15ms)\n✓ Test Case 3 (Hidden) Passed\n\n🎉 ALL TESTS PASSED! +50 XP Earned!");
      }
      setIsRunning(false);
    }, 600);
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
