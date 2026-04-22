import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="p-4">
      <Link
        to="/menu"
        className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <div className="flex items-center justify-center mt-36">
        <p className="text-xl text-gray-500">
          Your cart is empty. Start adding some pizzas 😀
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
