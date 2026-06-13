"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = function () {
  const links = [
    { href: "/cabins", label: "Cabins" },
    { href: "/about", label: "About" },
    { href: "/account", label: "Guest area" },
  ];

  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="z-10 md:text-xl ">
      <ul className="flex md:gap-16 items-center">
        {links.map((link) => (
          <li key={link.label}>
            {
              <Link
                href={link.href}
                className={
                  pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? `text-accent-600`
                    : `hover:text-accent-400 transition-colors`
                }
              >
                {link.label}
              </Link>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
