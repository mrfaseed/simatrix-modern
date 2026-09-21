"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918925991788?text=Hello%20Simatrix%20Academy%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20the%202026%20Admissions%20and%20Programs."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-btn"
      style={{
        position: "fixed",
        bottom: "26px",
        right: "26px",
        zIndex: 999,
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(37, 211, 102, 0.45)",
        cursor: "pointer",
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 10px 28px rgba(37, 211, 102, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.45)";
      }}
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.848.498 3.582 1.374 5.083L2.01 22.02l4.98-1.332A9.972 9.972 0 0 0 12.03 22c5.534 0 10.03-4.496 10.03-10.031 0-5.535-4.496-10.031-10.03-10.031zM17.47 15.688c-.227.64-1.127 1.185-1.558 1.258-.415.07-.947.108-2.735-.632-2.155-.892-3.52-3.111-3.627-3.256-.107-.145-.87-1.161-.87-2.215 0-1.055.553-1.573.748-1.787.195-.213.424-.267.566-.267.142 0 .284.002.408.008.132.006.31-.05.485.372.18.434.618 1.512.673 1.622.054.11.09.239.018.384-.072.146-.108.236-.217.363-.108.127-.229.284-.327.382-.108.109-.221.228-.095.446.126.217.56 1.051 1.2 1.697.824.83 1.52.88 1.737 1.025.218.145.345.127.472-.018.127-.146.545-.636.69-.854.146-.219.291-.182.491-.109.2.073 1.272.6 1.49.709.219.11.364.164.419.255.054.091.054.527-.173 1.167z" />
      </svg>
    </a>
  );
}
