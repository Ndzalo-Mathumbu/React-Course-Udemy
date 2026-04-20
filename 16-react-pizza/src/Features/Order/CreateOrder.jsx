import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../UI/Button';
import { useSelector } from 'react-redux';

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
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  const username = useSelector((state) => state.user.UserName);

  return (
    <div className="pl-3 pr-3 mt-8">
      <h2 className="mb-9 text-xl">Ready to order? Let's go!</h2>

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

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="rounded-full md:px-6 md:py-3 text-sm bg-yellow-100 placeholder:text-stone-400  sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2 w-full h-9"
            />
          </div>
        </div>

        <div className="mb-9 sm:mb-12 flex gap-5 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="w-6 h-6 accent-orange-300 focus: outline-none focus:ring-yellow-400 focus:ring-2"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button isSubmitting={isSubmitting} type="primary">
            {isSubmitting ? `ordering` : `Order now`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
