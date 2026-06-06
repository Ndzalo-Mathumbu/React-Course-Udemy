import Link from "next/link";
// import AnimatedHeading from "./Components/AnimatedHeading";

export default function Page() {
  return (
    <div>
      {/*  <a href="/cabins">See luxury cabins</a>  this reloads the page*/}
      <Link href="/cabins">See luxury cabins</Link>
      {/* <AnimatedHeading /> */}
    </div>
  );
}
