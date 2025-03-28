import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PortfolioMaker",
  description: "Create stunning portfolios with PortfolioMaker.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}