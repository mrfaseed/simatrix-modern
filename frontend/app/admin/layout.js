import Link from "next/link";

export default function AdminLayout({ children }) {
  const adminLinks = [
    { label: "Dashboard", href: "/admin", icon: "📊" },
    { label: "Students", href: "/admin/students", icon: "👥" },
    { label: "Programs", href: "/admin/programs", icon: "📚" },
    { label: "Challenges", href: "/admin/challenges", icon: "⚡" },
    { label: "Certificates", href: "/admin/certificates", icon: "🎓" },
    { label: "Events & Workshops", href: "/admin/events", icon: "📅" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - var(--header-h))" }}>
      <aside style={{
        width: "250px",
        background: "#080b12",
        borderRight: "1px solid var(--border-subtle)",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-cyan)", textTransform: "uppercase", padding: "0 12px 12px 12px", letterSpacing: "0.08em" }}>
          Simatrix Admin
        </div>

        {adminLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "var(--radius-md)",
              color: "var(--text-secondary)",
              fontSize: "0.88rem",
              fontWeight: 500,
            }}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </aside>

      <div style={{ flexGrow: 1, padding: "36px", background: "var(--bg-main)" }}>
        {children}
      </div>
    </div>
  );
}
