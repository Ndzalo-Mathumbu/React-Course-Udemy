// import Counter from "./Components/counter";
import "./globals.css";
import Logo from "./Components/Logo";
import Navigation from "./Components/Navigation";

const metadata = {
  title: "The Wild Oasis",
};

const RootLayout = function ({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          {" "}
          <Logo />
        </header>

        <Navigation />
        <main>{children}</main>
      </body>
      <footer>
        <p>Built by Ndzalo NK Mathumbu • Course project • 2026</p>
      </footer>
    </html>
  );
};
export { metadata };
export default RootLayout;
