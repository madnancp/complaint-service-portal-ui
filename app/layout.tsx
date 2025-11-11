import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"

})

export const metadata: Metadata = {
  title: "Complaint Service Portal",
  description: "Automated Complaint Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative w-full min-h-screen bg-background overflow-x-hidden ${poppins.className} antialiased`}>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "fixed inset-0 h-full w-full -z-10",
          )}
        />
        <Header />
        <main className="relative px-6 lg:px-36">
          {children}
        </main>
      </body>
    </html >
  );
}
