import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="logo">Amresh</div>
      <div className="links flex gap-4 ">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Navbar;
