import Link from "next/link";
import Image from "next/image";

export default function BrandLogo({ variant = "light", height = 36, style }) {
  const isLight = variant === "light";
  const aspectRatio = 2192.85 / 323.91; // ~6.77
  const width = Math.round(height * aspectRatio);

  return (
    <Link
      href="/"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        flexShrink: 0,
        ...style,
      }}
    >
      <Image
        src="/images/simatrix-for-website.svg"
        alt="Simatrix Logo"
        width={width}
        height={height}
        priority
        style={{
          height: `${height}px`,
          width: "auto",
          objectFit: "contain",
          filter: isLight ? "brightness(0) invert(1)" : "none",
          transition: "filter 0.3s ease, opacity 0.2s ease",
        }}
      />
    </Link>
  );
}

