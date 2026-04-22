import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { deleteItem } from './CartSlice';
import UpdateItemQuantity from './UpdateItemQuantity';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <>
      <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Remove from cart 🛒
      </Button>
    </>
  );
}

export default DeleteItem;
