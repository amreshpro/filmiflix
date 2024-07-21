import React from "react";

import ClerkSignInButton from "./ClerkSignIednButton";
import NavLink from "./NavLink";

function Sidebar() {
  return (
    <div className=" flex flex-col gap-4 p-2 ">
      <ClerkSignInButton className="text-2xl"  />
      <NavLink  className="flex flex-col gap-4 "  />
    </div>
  );
}

export default Sidebar;
