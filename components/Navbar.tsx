import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import ThemeSwitcher from "./ThemeSwitcher";
import { Button } from "./ui/button";

import NAV_LINKS from "@/constants/NAV_LINKS";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      {/* logo */}
      <Link href={"/"} className="logo">
        Amresh
      </Link>

      {/* nav link */}
      <div className="links flex items-center gap-4 ">
        {NAV_LINKS.map((nav) => {
          const { id, title, path } = nav;
          return (
            <Link key={id} href={path}>
              {title}
            </Link>
          );
        })}
        {/* clerk sign in button */}
        <SignedOut>
          <Button variant={"secondary"}>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* theme switcher */}
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Navbar;
