import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const data = useLoaderData();

  return (
    <ul className="divide-y divide-orange-200 mt-5 mb-5 pl-2 pr-2    sm:pl-0 sm:pr-2">
      {data.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
