"use client"

import { SessionProvider } from "next-auth/react";
import { Nunito } from "next/font/google";

const font = Nunito({
    subsets: ["latin"],
});

type Props = {
    children?: React.ReactNode
}
export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider >{children}</SessionProvider>
}