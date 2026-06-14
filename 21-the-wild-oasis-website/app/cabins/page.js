import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const metadata = {
  title: "Cabins",
};

export const revalidate = 3600;
// export const revalidate = 10;

const Page = function ({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

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
      <div className="mb-10 justify-end flex">
        <Filter filter={filter} />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
};

export default Page;
