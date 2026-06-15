"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathName = usePathname();
  return (
    <footer>
      {pathName === "/" || (
        <p className="text-gray-600 ml-6">
          <Link href="https://github.com/Ndzalo-Mathumbu">
            Built by Ndzalo NK Mathumbu • Course project • 2026
          </Link>
        </p>
      )}
    </footer>
  );
}

export default Footer;
