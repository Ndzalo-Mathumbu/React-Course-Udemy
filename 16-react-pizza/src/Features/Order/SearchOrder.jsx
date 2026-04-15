import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Orders..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
