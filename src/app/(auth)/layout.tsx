import UserLayout from "@/components/UserLayout/UserLayout";
import { getSession } from "@/lib/session";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
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
                        <Image src={'/Logo.svg'} alt='logo' width={30} height={100} className='w-[10%] h-auto' />
                        {children}
                    </Box>
                </UserLayout>
                {/* </ThemeContextProvider> */}
            </body>
        </html>
    );
}
