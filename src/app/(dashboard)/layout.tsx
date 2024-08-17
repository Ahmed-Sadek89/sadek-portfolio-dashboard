import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getSession();
    
    if (!session.Authorization) {
        redirect("/login")
    }

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
