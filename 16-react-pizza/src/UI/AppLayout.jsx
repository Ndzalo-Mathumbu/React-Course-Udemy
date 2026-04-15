import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/Cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === "loading" ? (
        <center>
          <Loader />
        </center>
      ) : (
        <>
          <Header />

          <main>
            <Outlet />
          </main>

          <CartOverview />
        </>
      )}
    </div>
  );
}

export default AppLayout;
