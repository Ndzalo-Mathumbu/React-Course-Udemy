import { Link } from 'react-router-dom';
import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const username = useSelector((state) => state.user.UserName);
  const clearCart = useSelector((state) => state.cart.cart);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, <span className="capitalize">{username}</span>
      </h2>
      <ul className="divide-y divide-orange-200 border-b  border-orange-200 mt-3">
        {cart?.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-5  mr-3 ml-4 mt-6">
        <Button type="primary">
          <Link to="/order/new">Proceed Checkout</Link>
        </Button>
        <Button type="primary" onClick={() => dispatch(clearCart())}>
          Clear cart 🗑
        </Button>
      </div>
    </div>
  );
}

export default Cart;
