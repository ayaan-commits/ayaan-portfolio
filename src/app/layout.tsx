import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Ayaan Ansari | Full Stack Developer & Automation Specialist",
  description: "Full Stack Developer specializing in automation, AI integrations, n8n workflows, and modern web development. Part tech builder, part creative mind.",
  keywords: ["Mohammad Ayaan Ansari", "full stack developer", "n8n", "automation", "Retell AI", "Twilio", "GoHighLevel", "web developer", "freelance developer"],
  authors: [{ name: "Mohammad Ayaan Ansari" }],
  openGraph: {
    title: "Mohammad Ayaan Ansari | Full Stack Developer & Automation Specialist",
    description: "Full Stack Developer specializing in automation, AI integrations, n8n workflows, and modern web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
