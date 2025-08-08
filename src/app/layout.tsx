import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B7Store",
  description: "B7Store é uma loja de roupas e acessórios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
