import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPizzaPrices, getPizzaQuantity } from './CartSlice';
import { formatCurrency } from '../../Utilities/helpers';

function CartOverview() {
  const pizzaQuantity = useSelector(getPizzaQuantity);
  const totalPizzaPrice = useSelector(getPizzaPrices);
  if (!pizzaQuantity) return;
  return (
    <div className="bg-gradient-to-l  from-yellow-300 to bg-orange-300 text-stone-400 uppercase border-t-[2px] border-orange-300 px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-700 font-semibold  space-x-4  px-4">
        <span>{pizzaQuantity} Pizzas</span>
        <span>{formatCurrency(totalPizzaPrice)}</span>
      </p>
      <Link to="/cart" className=" px-4">
        Open cart &rarr; 🛒
      </Link>
    </div>
  );
}

export default CartOverview;
