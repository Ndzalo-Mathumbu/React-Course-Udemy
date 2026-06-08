import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export const metadata = {
  title: "Cabins",
};

const Page = async function () {
  const cabins = await getCabins();
  console.log(cabins);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Where luxury meets wilderness. Nestled among the majestic peaks of the
        Italian Dolomites, The Wild Oasis invites you to slow down, breathe
        deeply, and experience nature at its finest. Wake up to mountain
        sunrises, explore hidden trails, and end your days beneath the stars.
        Welcome to paradise.
      </p>

      {cabins?.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
