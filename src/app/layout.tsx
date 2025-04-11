import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Botox & Chill | Luxury Med Spa in Maui",
  description: "Maui's most exclusive Med Spa experience, where luxury meets transformation. Serving only the most discerning high net worth clients.",
  keywords: "luxury med spa, botox, fillers, maui, exclusive treatments, high-end beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
