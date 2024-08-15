import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { getSession } from "@/actions";
import { redirect } from "next/navigation";

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
    console.log({session})
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
