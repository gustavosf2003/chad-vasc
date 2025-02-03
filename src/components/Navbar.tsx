import { HamburgerButton } from "@/HambugerButton";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";
import Av from "@/assets/av.png";
import { NavLink } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {open && <ResponsiveMenu />}
      <div className="flex justify-between items-center h-20 border-b text-12 tracking-[-0.24px] opacity-50 px-4 z-50">
        <NavLink to="/">
          {!open && <img className="h-[80px] w-[96px] z-10" src={Av} />}
        </NavLink>
        <div className="absolute right-4">
          <HamburgerButton
            open={open}
            setOpen={() => setOpen((prevState) => !prevState)}
          />
        </div>
      </div>
    </>
  );
}
