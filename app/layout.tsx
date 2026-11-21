import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prélakay — Cherchez-vous encore votre produit ?",
  description:
    "Commandez en ligne auprès des commerces près de chez vous, retirez au comptoir ou faites-vous livrer. Votre argent reste protégé jusqu'à ce que vous ayez votre article en main.",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-180.png",
  },
};

export const viewport = {
  themeColor: "#0e6b74",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
