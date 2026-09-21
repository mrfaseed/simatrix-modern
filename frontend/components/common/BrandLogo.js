import Link from "next/link";

export default function BrandLogo({ variant = "light" }) {
  const isLight = variant === "light";
  const textColor = isLight ? "#FFFFFF" : "#0B1320";
  const goldColor = "#E5A93C";

  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      {/* Luxury Classical Laurel Wreath Academic Crest */}
      <div style={{ position: "relative", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Fine Crest Ring */}
          <circle cx="50" cy="50" r="46" stroke={isLight ? "rgba(255,255,255,0.18)" : "rgba(11,19,32,0.12)"} strokeWidth="1" strokeDasharray="3 3" />

          {/* Left Classical Laurel Leaves */}
          <path d="M 46 86 C 26 82 16 64 16 46 C 16 32 26 18 42 12" stroke={goldColor} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 28 72 Q 18 68 20 60 Q 28 64 30 70" fill={goldColor} fillOpacity="0.85" />
          <path d="M 20 54 Q 12 48 16 40 Q 22 46 22 52" fill={goldColor} fillOpacity="0.85" />
          <path d="M 22 36 Q 16 28 24 22 Q 28 30 25 36" fill={goldColor} fillOpacity="0.85" />
          <path d="M 32 22 Q 30 12 38 10 Q 38 20 34 22" fill={goldColor} fillOpacity="0.85" />

          {/* Right Classical Laurel Leaves */}
          <path d="M 54 86 C 74 82 84 64 84 46 C 84 32 74 18 58 12" stroke={goldColor} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 72 72 Q 82 68 80 60 Q 72 64 70 70" fill={goldColor} fillOpacity="0.85" />
          <path d="M 80 54 Q 88 48 84 40 Q 78 46 78 52" fill={goldColor} fillOpacity="0.85" />
          <path d="M 78 36 Q 84 28 76 22 Q 72 30 75 36" fill={goldColor} fillOpacity="0.85" />
          <path d="M 68 22 Q 70 12 62 10 Q 62 20 66 22" fill={goldColor} fillOpacity="0.85" />

          {/* Bottom Laurel Knot Ribbon */}
          <circle cx="50" cy="87" r="3" fill={goldColor} />
          <path d="M 44 86 Q 50 90 56 86" stroke={goldColor} strokeWidth="1.8" strokeLinecap="round" />

          {/* Center Classical Roman Monogram */}
          <text
            x="50"
            y="57"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="26"
            fontWeight="bold"
            fill={textColor}
            letterSpacing="1"
          >
            S
          </text>
        </svg>
      </div>

      {/* Editorial Wordmark */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: "1.08rem",
            letterSpacing: "0.14em",
            color: textColor,
            lineHeight: 1.1,
          }}
        >
          SIMATRIX
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.32em",
            color: goldColor,
            textTransform: "uppercase",
            marginTop: "3px",
          }}
        >
          ACADEMY
        </span>
      </div>
    </Link>
  );
}
