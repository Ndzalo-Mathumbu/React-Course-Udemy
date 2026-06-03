import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>
      {/*  <a href="/cabins">See luxury cabins</a>  this reloads the page*/}
      <Link href="/cabins">See luxury cabins</Link>
    </div>
  );
}
