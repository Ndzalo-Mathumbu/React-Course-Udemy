import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../Features/Cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {navigation.state === 'loading' ? (
        <center>
          <Loader />
        </center>
      ) : (
        <>
          <Header />

          <div className="overflow-x-hidden">
            <main className="max-w-3xl mx-auto">
              <Outlet />
            </main>
          </div>
          <CartOverview />
        </>
      )}
    </div>
  );
}

export default AppLayout;
