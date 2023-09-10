"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const is_Path =
    path === "/tasks" || path === "/tasks/task" || path === "/tasks/list";

  return (
    <html lang="en">
      <body className="overflow-x-hidden flex flex-col min-h-[100vh]">
        <NextTopLoader
          color="#3730A3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {is_Path ? (
          <> {children}</>
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
