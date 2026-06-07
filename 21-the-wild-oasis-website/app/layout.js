// import Counter from "./Components/counter";
import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

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
        <div className="flex-1 px-8 py-12">
          {" "}
          <main className="max-w-6xl mx-auto">{children}</main>
        </div>
      </body>
      {/* <footer>
        <p>Built by Ndzalo NK Mathumbu • Course project • 2026</p>
      </footer> */}
    </html>
  );
};
export { metadata };
export default RootLayout;
