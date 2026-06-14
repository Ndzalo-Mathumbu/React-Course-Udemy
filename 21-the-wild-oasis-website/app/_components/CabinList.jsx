import { notFound } from "next/navigation";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }) {
  const cabins = await getCabins();
  // noStore();
  console.log(cabins);
  if (!cabins.length) return null;
  let showedCabins;

  switch (filter) {
    case "all":
      showedCabins = cabins;
      break;
    case "small":
      showedCabins = cabins.filter((a) => a.maxCapacity <= 3);
      break;
    case "medium":
      showedCabins = cabins.filter(
        (a) => a.maxCapacity >= 7 && a.maxCapacity <= 8,
      );
      break;
    case "big":
      showedCabins = cabins.filter((a) => a.maxCapacity >= 8);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {showedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
