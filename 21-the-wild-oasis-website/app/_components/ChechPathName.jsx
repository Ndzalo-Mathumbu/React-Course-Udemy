"use client";
import { usePathname } from "next/navigation";

function ChechPathName() {
  const pathName = usePathname();
  console.log("this is the path", pathName);
  return (
    <footer>
      {pathName === "/" || (
        <p className="text-gray-600 ml-6">
          Built by Ndzalo NK Mathumbu • Course project • 2026
        </p>
      )}
    </footer>
  );
}

export default ChechPathName;
