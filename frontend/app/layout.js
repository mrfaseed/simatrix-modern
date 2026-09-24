import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Simatrix Academy | Learn. Build. Prove. Get Career Ready.",
  description: "Rebuilding tech education. Intensive career programs in Full Stack Development, Data Analytics, and AI with interactive practice arenas (CodeArena, SQLLab), real production projects, and verified student portfolios.",
  keywords: ["Simatrix Academy", "Full Stack Development", "Data Analytics", "Data Science", "Learn to Code", "CodeArena", "Student Portfolio", "Placement Preparation"],
  openGraph: {
    title: "Simatrix Academy",
    description: "Learn. Practice. Build. Get Career Ready — intensive programs in Full Stack, Data Analytics, and AI.",
    siteName: "Simatrix Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simatrix Academy",
    description: "Learn. Practice. Build. Get Career Ready — intensive programs in Full Stack, Data Analytics, and AI.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className={plusJakartaSans.className} style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <AnnouncementBar />
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
