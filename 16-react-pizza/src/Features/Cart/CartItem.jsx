import Button from '../../UI/Button';
import { formatCurrency } from '../../Utilities/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="sm:mb-0 mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <Button type="small">Remove</Button>
      </div>
    </li>
  );
}

export default CartItem;
