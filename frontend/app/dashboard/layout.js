import Link from "next/link";

export default function DashboardLayout({ children }) {
  const sidebarLinks = [
    { label: "Overview", href: "/dashboard", icon: "📊" },
    { label: "My Enrolled Courses", href: "/dashboard/my-courses", icon: "📚" },
    { label: "Project Submissions", href: "/dashboard/submissions", icon: "🛠️" },
    { label: "My Certificates", href: "/dashboard/certificates", icon: "🎓" },
    { label: "Account Settings", href: "/dashboard/settings", icon: "⚙️" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - var(--header-h))" }}>
      {/* Sidebar Navigation */}
      <aside style={{
        width: "260px",
        background: "var(--bg-surface)",
        borderRight: "1px solid var(--border-subtle)",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", padding: "0 12px 12px 12px", letterSpacing: "0.08em" }}>
          Student LMS Portal
        </div>

        {sidebarLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 14px",
              borderRadius: "var(--radius-md)",
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}

        <div style={{ marginTop: "auto", borderTop: "1px solid var(--border-subtle)", paddingTop: "16px" }}>
          <Link
            href="/profile/sakthi"
            style={{
              display: "block",
              padding: "10px",
              borderRadius: "var(--radius-sm)",
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.2)",
              textAlign: "center",
              fontSize: "0.82rem",
              color: "#a5b4fc",
              fontWeight: 600,
            }}
          >
            View Public Profile ↗
          </Link>
        </div>
      </aside>

      {/* Main LMS Dashboard Content Area */}
      <div style={{ flexGrow: 1, padding: "36px", background: "var(--bg-main)" }}>
        {children}
      </div>
    </div>
  );
}
