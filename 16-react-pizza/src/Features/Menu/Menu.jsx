import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData();

  return (
    <ul>
      {data.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
