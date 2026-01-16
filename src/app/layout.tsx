import type { Metadata } from "next";
import { Outfit, Megrim } from "next/font/google";
import "./globals.css";
import GlobalEffects from "@/components/effects/GlobalEffects";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const megrim = Megrim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-megrim",
});

export const metadata: Metadata = {
  title: "Augustin Vathonne | Fullstack Developer",
  description: "Fullstack Developer crafting fast, scalable, and immersive digital experiences with Next.js, Node.js, and Three.js.",
  keywords: ["Fullstack Developer", "React", "Next.js", "Web Developer", "Paris"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${megrim.variable}`}>
      <body className="font-outfit">
        <GlobalEffects />
        {children}
      </body>
    </html>
  );
}
