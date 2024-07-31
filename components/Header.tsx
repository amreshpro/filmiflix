"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwitcher";

import ClerkSignInButton from "./ClerkSignIednButton";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Loading from "@/app/loading";
import SearchPopup from "./SearchPopup";

function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
const [isSearchOpen, setIsSearchOpen] = useState(false)

function toggleSearchPopup(){
  setIsSearchOpen(!isSearchOpen)
}

  function mobileMenuHandler() {
    setIsMobileMenu(!isMobileMenu);
  }
  return (<>
    <header className="transition-all  flex justify-between items-center px-4 py-2 ">
      {/* logo */}
      <div className="logo flex gap-4 items-center">
        <Link href={"/"} className="logo rounded-lg overflow-hidden ">
          <Image alt="logo" src="/logo.png" width={40} height={15} />
        </Link>
        <ThemeSwitcher className="hidden sm:flex" />
      </div>

      <div className="links sm:hidden flex items-center gap-4 ">
        <ThemeSwitcher />
        <Button onClick={toggleSearchPopup}><IoSearch/></Button>
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
        <div className="sidebar hidden  absolute top-16 right-0  w-1/3 sm:w-1/2 h-full sm:flex flex-col gap-6 bg-secondary ">
          <Sidebar />
        </div>
      )}
    </header>
    {isSearchOpen && <SearchPopup className="absolute top-16 left-1/3 p-4 rounded-lg"/>}
      </>
  );
}

export default Header;
