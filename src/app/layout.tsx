import type { Metadata } from "next";
import { Chakra_Petch, Fira_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chakra = Chakra_Petch({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://patkatattoos.pl"),
    title: "Patka Tattoos",
    description: "Strona osobista Patka Tattoos. Studio tatuażu",
    openGraph: {
        images: "/og.png"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={chakra.className}>{children}</body>
        </html>
    );
}
