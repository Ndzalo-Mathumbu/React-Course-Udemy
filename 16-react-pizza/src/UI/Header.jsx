import { Link } from "react-router-dom";
import SearchOrder from "../Features/Order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">The Good Pizza Co.</Link>
      <SearchOrder /> <p>🍕</p>
    </div>
  );
}

export default Header;
