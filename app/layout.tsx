import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceTax AI — Quarterly Tax Estimator for Freelancers",
  description: "AI-powered tax estimation engine that analyzes your freelancer income patterns, predicts quarterly payments, and suggests deductions. Stop overpaying the IRS."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="95200106-79eb-4ce5-86b0-71264dd7182d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
