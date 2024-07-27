"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwitcher";

import ClerkSignInButton from "./ClerkSignIednButton";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import Image from "next/image";

function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function mobileMenuHandler() {
    setIsMobileMenu(!isMobileMenu);
  }
  return (
    <header className="transition-all  flex justify-between items-center px-4 py-2 ">
      {/* logo */}
      <div className="logo flex gap-4 items-center">
        <Link href={"/"} className="logo rounded-lg ">
          <Image alt="logo" src="/logo.png" width={90} height={15} />
        </Link>
        <ThemeSwitcher className="hidden sm:flex" />
      </div>

      <div className="links sm:hidden flex items-center gap-4 ">
        <ThemeSwitcher />
        <NavLink />
        <ClerkSignInButton />
      </div>

      {/* mobile menu button */}
      <Button
        variant={"outline"}
        onClick={mobileMenuHandler}
        className="hidden sm:flex text-2xl px-2 py-2"
      >
        {isMobileMenu ? (
          <IoCloseOutline className="text-red-500" />
        ) : (
          <LuMenu />
        )}
      </Button>

      {isMobileMenu && (
        <div className="sidebar absolute top-16 right-0  w-1/3 sm:w-1/2 h-full flex flex-col gap-6 bg-secondary ">
          <Sidebar />
        </div>
      )}
    </header>
  );
}

export default Header;
