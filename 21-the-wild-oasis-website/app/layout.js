// import Counter from "./Components/counter";

import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import ChechPathName from "./_components/ChechPathName";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

const metadata = {
  title: {
    default: "Welcome | The Wild Oasis",
    template: "%s | The Wild Oasis",
  },
  description:
    "Escape to luxury wooden cabins nestled deep within a breathtaking mountain forest. The Wild Oasis offers cozy cabin stays, stunning nature views, peaceful surroundings, and an unforgettable wilderness retreat. Discover the perfect getaway for relaxation, adventure, and reconnecting with nature.",
};

const RootLayout = function ({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased text-primary-100 bg-primary-950 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          {" "}
          <main className="max-w-6xl mx-auto w-full">{children}</main>
        </div>
      </body>
      <ChechPathName />
    </html>
  );
};
export { metadata };
export default RootLayout;
