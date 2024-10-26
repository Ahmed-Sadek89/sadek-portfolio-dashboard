import UserLayout from "@/components/UserLayout/UserLayout";
import { getSession } from "@/lib/session";
import { Box } from "@mui/material";
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
                    <Box className="flex flex-col gap-3 w-full">
                        {children}
                    </Box>
                </UserLayout>
                {/* </ThemeContextProvider> */}
            </body>
        </html>
    );
}
