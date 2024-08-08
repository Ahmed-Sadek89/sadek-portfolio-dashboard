import UserLayout from "@/components/UserLayout/UserLayout";
import type { Metadata } from "next";

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
                {/* <ThemeContextProvider> */}
                <UserLayout>
                    {children}
                </UserLayout>
                {/* </ThemeContextProvider> */}
            </body>
        </html>
    );
}
