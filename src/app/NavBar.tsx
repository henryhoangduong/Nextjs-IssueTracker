"use client"
import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classNames from "classnames";
const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath)
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item, key) => {
          return (
            <Link
              href={item.href }
              key={key}
              className={
                classNames({
                  "text-zinc-900": item.href == currentPath,
                  "text-zinc-500": item.href !== currentPath,
                  "hover:text-zinc-800 transition-colors":true
                })
              }
              // className={ `${item.href == currentPath ? "text-zinc-900":"text-zinc-500"}  hover:text-zinc-800 transition-colors`}
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
