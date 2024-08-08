import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import ThemeContextProvider from "@/context/ThemeContext";

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
                <ThemeContextProvider>
                    <Layout>
                        {children}
                    </Layout>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
