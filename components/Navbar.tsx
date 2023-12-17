import React from "react";
import { Socials } from "../constants";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="logo"
            width={45}
            height={45}
            className="w-full h-full object-contain bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          BESTCULLING{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Dev
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link key={social.name} href={social.target} target="_blank">
            <Image className="bg-white p-[2px] rounded-full" src={social.src} alt={social.name} width={35} height={35} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
