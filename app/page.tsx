import Navbar from "@/components/Header";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Loader from "./loader";

export default function Main() {
  // const { isSignedIn, user, isLoaded } =  useUser();

  // if (!isLoaded) return <Loader />;
  // if (!isSignedIn) {
  //   redirect("/sign-up");
  // }
  // console.log(user);
  return (
    <div className="flex flex-col gap-4">
      <h1>App Page</h1>
    </div>
  );
}
