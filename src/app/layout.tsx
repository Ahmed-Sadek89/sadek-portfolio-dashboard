import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Sadek | أْحْمَدْ صَادِقْ",
  description: "ahmed sadek portfolio dashboard",
  icons: [
    {
      url: "/logo.jpg",
      href: "/logo.jpg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NextTopLoader
          color="#0171FF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {/* <ThemeContextProvider> */}
        {children}
        {/* </ThemeContextProvider> */}
      </body>
    </html>
  );
}
