import { getSession } from "@/actions";
import UserLayout from "@/components/UserLayout/UserLayout";
import type { Metadata } from "next";
import { redirect } from "next/navigation"

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
    const session = await getSession()

    if (session.Authorization) {
        redirect("/")
    }
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                {/* <ThemeContextProvider> */}
                <UserLayout>
                    {children}
                </UserLayout>
                {/* </ThemeContextProvider> */}
            </body>
        </html>
    );
}
