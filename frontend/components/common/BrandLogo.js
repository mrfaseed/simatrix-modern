import Link from "next/link";

export default function BrandLogo({ variant = "light" }) {
  const isLight = variant === "light";
  const textColor = isLight ? "#FFFFFF" : "#0B1320";
  const crestColor = isLight ? "#FFFFFF" : "#0B1320";
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
      {/* Precision Vector Laurel Wreath Crest Emblem */}
      <div
        style={{
          position: "relative",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Geometric Outer Guide Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={isLight ? "rgba(229, 169, 60, 0.25)" : "rgba(11, 19, 32, 0.15)"}
            strokeWidth="1"
            strokeDasharray="2 3"
          />

          {/* Left Symmetrical Laurel Wreath */}
          <path
            d="M 47 88 C 28 85 14 68 14 48 C 14 34 24 20 40 13"
            stroke={crestColor}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Left Leaves */}
          <path d="M 28 75 C 20 72 18 64 24 59 C 29 64 30 71 28 75 Z" fill={crestColor} fillOpacity="0.9" />
          <path d="M 19 56 C 12 50 14 42 20 38 C 24 43 23 51 19 56 Z" fill={crestColor} fillOpacity="0.9" />
          <path d="M 20 38 C 16 30 22 23 28 22 C 29 29 25 35 20 38 Z" fill={crestColor} fillOpacity="0.9" />
          <path d="M 30 24 C 28 15 36 12 41 13 C 40 20 35 24 30 24 Z" fill={crestColor} fillOpacity="0.9" />

          {/* Right Symmetrical Laurel Wreath */}
          <path
            d="M 53 88 C 72 85 86 68 86 48 C 86 34 76 20 60 13"
            stroke={crestColor}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Right Leaves */}
          <path d="M 72 75 C 80 72 82 64 76 59 C 71 64 70 71 72 75 Z" fill={crestColor} fillOpacity="0.9" />
          <path d="M 81 56 C 88 50 86 42 80 38 C 76 43 77 51 81 56 Z" fill={crestColor} fillOpacity="0.9" />
          <path d="M 80 38 C 84 30 78 23 72 22 C 71 29 75 35 80 38 Z" fill={crestColor} fillOpacity="0.9" />
          <path d="M 70 24 C 72 15 64 12 59 13 C 60 20 65 24 70 24 Z" fill={crestColor} fillOpacity="0.9" />

          {/* Bottom Ribbon Knot */}
          <circle cx="50" cy="89" r="2.5" fill={crestColor} />
          <path d="M 44 88 Q 50 92 56 88" stroke={crestColor} strokeWidth="1.5" strokeLinecap="round" />

          {/* Classical Roman Serif Monogram S */}
          <path
            d="M 58 35 C 57 32 54 30 49 30 C 44 30 41 33 41 37 C 41 42 45 44 51 47 C 58 50 62 54 62 61 C 62 68 56 72 48 72 C 41 72 37 68 36 63 L 41 62 C 42 66 45 68 49 68 C 54 68 57 65 57 61 C 57 56 52 53 46 50 C 40 47 36 43 36 37 C 36 31 41 26 49 26 C 55 26 60 29 61 34 L 58 35 Z"
            fill={textColor}
          />
        </svg>
      </div>

      {/* Editorial Luxury Wordmark */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.18em",
            color: textColor,
            lineHeight: 1.1,
            textTransform: "uppercase",
          }}
        >
          SIMATRIX
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.58rem",
            fontWeight: 700,
            letterSpacing: "0.36em",
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
