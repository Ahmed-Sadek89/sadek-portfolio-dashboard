import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import ThemeContextProvider from "@/context/ThemeContext";
import { Providers } from "@/context/ThemeProviderContext";

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
                <Providers>
                    <Layout>
                        {children}
                    </Layout>
                </Providers>
            </body>
        </html>
    );
}
