"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navigation = function ({ session }) {
  const [label, setLabel] = useState("Guest area");
  const links = [
    { id: 1, href: "/cabins", label: "Cabins" },
    { id: 2, href: "/about", label: "About" },
    { id: 3, href: "/account", label: label },
  ];

  const handleMouseEnter = function () {
    setLabel(session?.user?.name || "Guest area");
  };

  const handleMouseLeave = function () {
    setLabel("Guest area");
  };

  const pathname = usePathname();

  return (
    <nav className="z-10 md:text-xl">
      <ul className="flex md:gap-16 items-center">
        {/* USER IMAGE */}

        {/* NAV LINKS */}
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-accent-600"
                  : "hover:text-accent-400 transition-colors"
              }
            >
              <div
                className="flex flex-row-reverse items-center gap-3"
                onMouseEnter={
                  link.label === "Guest area" ? handleMouseEnter : undefined
                }
                onMouseLeave={
                  link.label === session?.user?.name
                    ? handleMouseLeave
                    : undefined
                }
              >
                {link.label}

                <div>
                  {session?.user?.image && link.label === "Guest area" && (
                    <>
                      <Image
                        src={session?.user?.image}
                        alt="User avatar"
                        width={45}
                        height={45}
                        className="rounded-full hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                        // onMouseLeave={handleMouseLeave}
                      />
                    </>
                  )}
                </div>
                <div>
                  {session?.user?.image &&
                    link.label === session?.user?.name && (
                      <>
                        <Image
                          src={session?.user?.image}
                          alt="User avatar"
                          width={45}
                          height={45}
                          className="rounded-full hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </>
                    )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
