import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    // The landing page will be available to everyone, even unauthenticated users.
    // Button links to the sign in and sign up pages
    <div>
      LandingPage (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
}
