import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { decreaseQuantity, increaseQuantity } from './CartSlice';

function UpdateItemQuantity({ pizzaId, pizzaQuantityInCart }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-1 items-center md:gap-2 ml-20 md:ml-0">
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        ➕
      </Button>
      <span className="my-[-8px] text-sm"> {pizzaQuantityInCart}</span>
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        ➖
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
