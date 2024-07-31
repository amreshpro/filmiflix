import React from "react";

import ClerkSignInButton from "./ClerkSignIednButton";
import NavLink from "./NavLink";

function Sidebar() {
  return (
    <div className="z-50  flex flex-col pt-8 gap-4 p-2 pl-4 ">
      <ClerkSignInButton className="text-2xl"  />
      <NavLink  className="flex flex-col gap-4 "  />
    </div>
  );
}

export default Sidebar;
