import { ReactNode } from "react";

export default function AuthLayout({
    children
}:Readonly<{children:ReactNode}>) {
    return(
        <div>
            {children}
        </div>
    )
}