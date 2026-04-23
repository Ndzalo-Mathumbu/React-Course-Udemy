import { formatCurrency } from '../../Utilities/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between">
        <p className="font-medium tracking-wide">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="text-xs font-medium ">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients
          ? 'Loading ingredients...'
          : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
