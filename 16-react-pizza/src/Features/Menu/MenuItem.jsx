import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button';
import Loader from '../../UI/Loader';
import { formatCurrency } from '../../Utilities/helpers';
import { addItem, getCurrentQuantityByid } from '../Cart/CartSlice';
import DeleteItem from '../Cart/DeleteItem';
import UpdateItemQuantity from '../Cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  if (!pizza) {
    <Loader />;
  }

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityByid(id));
  const isInCart = currentQuantity > 0;
  const dispatch = useDispatch();
  const handleAddToCart = function () {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };
  return (
    <li className="flex gap-4 mb-1">
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        decoding="async"
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className={`font-medium ${soldOut ? 'text-stone-400' : ''}`}>
          {name}
        </p>
        <p
          className={`text-sm italic text-stone-500 capitalize ${soldOut ? 'text-stone-400' : ''}`}
        >
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-400">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex gap-1 sm:gap-5">
              <UpdateItemQuantity
                pizzaId={id}
                pizzaQuantityInCart={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <>
              <Button type="small" onClick={handleAddToCart}>
                Add to cart 🛒
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
