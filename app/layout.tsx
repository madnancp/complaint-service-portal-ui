import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideToolbarDock from "@/components/SideToolbar";

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
      <body className={`relative w-full min-h-screen bg-background overflow-x-hidden ${poppins.className} antialiased relative`}>
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
          <SideToolbarDock />
        </div>

        <main className="relative px-6 lg:px-36 col-span-7">
          {children}
        </main>
      </body>
    </html >
  );
}
