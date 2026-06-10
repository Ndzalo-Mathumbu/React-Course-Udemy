import Link from "next/link";

function PageNotfound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        Cabin your are look for could not be found. 😕
      </h1>
      <Link
        href="/cabins"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        &larr; Go back
      </Link>
    </main>
  );
}

export default PageNotfound;
