import React from "react";
import { NavLinks } from "../constants";
import Link from "next/link";

function Navigation() {
  return (
    <div
      style={{ left: "20%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center bg-black border border-white px-4 py-7"
    >
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon className="w-[24px] h-[24px] text-white" />
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
