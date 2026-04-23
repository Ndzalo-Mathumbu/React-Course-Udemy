// Test ID: IIDSAT
import OrderItem from './OrderItem';
import { useFetcher, useLoaderData } from 'react-router-dom';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../Utilities/helpers';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);
  console.log(fetcher);
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="py-6 px-4 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold mb-5"> Order #{id} status</h2>

        <div className="space-x-2 ">
          {priority && (
            <span className="rounded-full bg-red-100 border-[1.2px] border-red-600 px-1 py-1 font-medium text-stone-600 tracking-wide">
              Priority
            </span>
          )}

          <span
            className={`${status === 'delivered' ? 'rounded-full bg-green-100 border-[1.2px] border-green-600 px-1 py-1 font-medium text-stone-600 tracking-wide uppercase' : 'rounded-full bg-orange-100 border-[1.2px] border-orange-500 px-1 py-1 font-medium text-stone-600 tracking-wide uppercase'}`}
          >
            order is {status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-orange-100 rounded-md py-5 px-6 border-[1px] border-orange-200">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs ">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-orange-200 border-b border-orange-200  border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.id}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>
      <div className="bg-orange-100 rounded-md py-5 px-6 border-[1px] border-orange-200">
        <p className="text-sm font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export default Order;
