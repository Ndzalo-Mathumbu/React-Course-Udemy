import { Link } from 'react-router-dom';
import SearchOrder from '../Features/Order/SearchOrder';
import UserName from '../Features/User/UserName';

function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-300 to-orange-300 uppercase px-4 py-3 border-b-2 border-orange-300 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest">
        The Good Pizza Co.
      </Link>
      <SearchOrder />{' '}
      <p>
        <UserName />
      </p>
    </header>
  );
}

export default Header;
