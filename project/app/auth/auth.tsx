"use client";  // Forces this component to run only on the client

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Auth() {
    return (
    <ClerkProvider>
        <SignedOut>
        <SignInButton />
        </SignedOut>
        <SignedIn>
        <UserButton />
        </SignedIn>
    </ClerkProvider>
    );
}
