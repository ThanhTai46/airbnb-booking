"use client"

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
    children?: React.ReactNode
}
export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>
}

export const NextUiProvider = ({ children }: Props) => {
    return <NextUIProvider>{children}</NextUIProvider>
}