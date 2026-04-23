import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getPizzaPrices } from '../Cart/CartSlice';
import EmptyCart from '../Cart/EmptyCart';
import { formatCurrency } from '../../Utilities/helpers';
import { fetchAddress } from '../User/userSlice';

// https://uibakery.io/regex-library/phone-number
export const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAdress,
  } = useSelector((state) => state.user);
  const totalPrice = useSelector(getPizzaPrices);
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const totalCartPriceItems = totalPrice + priorityPrice;
  const dispatch = useDispatch();
  const isLoadingAddress = addressStatus === 'loading';

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="pl-3 pr-3 mt-8">
      <h2 className="mb-9 text-xl">Ready to order? Let‘s go!</h2>

      {/* <button onClick={() => dispatch(fetchAddress())}>position</button> */}

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="rounded-full md:px-6 md:py-3 text-sm bg-yellow-100 placeholder:text-stone-400  sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2 h-9"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          {formErrors?.phone && (
            <p className="text-red-600 text-sm bg-red-100 rounded-md p-2">
              {formErrors.phone}
            </p>
          )}
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="rounded-full md:px-6 md:py-3 text-sm bg-yellow-100 placeholder:text-stone-400 sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2 h-9"
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
              className="rounded-full md:px-6 md:py-3 text-sm bg-yellow-100 placeholder:text-stone-400  sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2 w-full h-9"
            />
            {addressStatus === 'error' && (
              <p className="text-red-600 text-sm bg-red-100 rounded-md p-2">
                {errorAdress}
              </p>
            )}
          </div>
          <span className="absolute right-[3px] z-50">
            {!position.latitude && !position.longitude && (
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  dispatch(fetchAddress());
                  e.preventDefault();
                }}
              >
                Get Position
              </Button>
            )}
          </span>
        </div>

        <div className="mb-9 sm:mb-12 flex gap-5 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="w-6 h-6 accent-orange-300 focus: outline-none focus:ring-yellow-400 focus:ring-2"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />
          <Button
            isSubmitting={isSubmitting || isLoadingAddress}
            type="primary"
          >
            {isSubmitting
              ? `ordering...`
              : `Pay ${formatCurrency(totalCartPriceItems)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
