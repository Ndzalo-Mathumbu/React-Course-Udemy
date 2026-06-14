"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "./FilterButtons";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const activeFilter = params.get("capacity");
  const handleFilter = function (filter) {
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      <Button activeFilter={activeFilter} onHandleFilter={handleFilter} />
    </div>
  );
}

export default Filter;
