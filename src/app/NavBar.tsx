import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";
const NavBar = () => {
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
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
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
