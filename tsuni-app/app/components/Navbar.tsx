"use client";

import { IoBook, IoBookOutline, IoHome, IoHomeOutline, IoLeaf, IoLeafOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdInfo, MdOutlineInfo } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute max-w-[600px] bottom-0 z-4000 bg-gray-2 h-15 text-white w-full">
      <div className="flex items-center w-full h-full">
        <Link
          href="/"
          className={`flex flex-col justify-center items-center w-full h-full ${
            pathname === "/" ? "bg-green-2 text-gray-1 rounded-tr" : "text-green-4"
          }`}
        >
          {pathname === "/" ? (
            <IoHome className="text-2xl" />
          ) : (
            <IoHomeOutline className="text-2xl" />
          )}
          <span className={`text-xs ${pathname === "/" ? "font-bold" : ""}`}>Home</span>
        </Link>

        <Link
          href="/exercices"
          className={`flex flex-col justify-center items-center w-full h-full ${
            pathname === "/exercices" ? "bg-green-2 text-gray-1 rounded-t" : "text-green-4"
          }`}
        >
          {pathname === "/exercices" ? (
            <IoLeaf className="text-2xl" />
          ) : (
            <IoLeafOutline className="text-2xl" />
          )}
          <span className={`text-xs ${pathname === "/exercices" ? "font-bold" : ""}`}>Exercices</span>
        </Link>

        <Link
          href="/diary"
          className={`flex flex-col justify-center items-center w-full h-full ${
            pathname === "/diary" ? "bg-green-2 text-gray-1 rounded-t" : "text-green-4"
          }`}
        >
          {pathname === "/diary" ? (
            <IoBook className="text-2xl" />
          ) : (
            <IoBookOutline className="text-2xl" />
          )}
          <span className={`text-xs ${pathname === "/diary" ? "font-bold" : ""}`}>Journal</span>
        </Link>

        <Link
          href="/about"
          className={`flex flex-col justify-center items-center w-full h-full ${
            pathname === "/about" ? "bg-green-2 text-gray-1 rounded-tl" : "text-green-4"
          }`}
        >
          {pathname === "/about" ? (
            <MdInfo className="text-2xl" />
          ) : (
            <MdOutlineInfo className="text-2xl" />
          )}
          <span className={`text-xs ${pathname === "/about" ? "font-bold" : ""}`}>À Propos</span>
        </Link>
      </div>
    </nav>
  );
}
