import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import Layout from "@/components/Layout/Layout";

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
        <Layout>
            {children}
        </Layout>
    );
}
