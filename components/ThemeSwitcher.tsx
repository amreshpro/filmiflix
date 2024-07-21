"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function themeHandler() {
    setTheme(() => {
      return theme == "dark" ? "light" : "dark";
    });
  }

  if (!mounted) return null;
  return (
    <Button onClick={themeHandler}>
      {theme == "dark" ? <IoMdSunny /> : <IoMdMoon />}
    </Button>
  );
}

export default ThemeSwitcher;
