import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

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

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="rounded-full md:px-6 md:py-3 text-sm bg-yellow-100 placeholder:text-stone-400  sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2"
          />
        </div>

        <div>
          <label>Phone number</label>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="rounded-full md:px-6 md:py-3 text-sm bg-yellow-100 placeholder:text-stone-400 sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2"
            />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="rounded-full md:px-6 md:py-3 text-sm bg-yellow-100 placeholder:text-stone-400  sm:w-full sm:focus:w-70 transition-all duration-500 focus: outline-none focus:ring-yellow-400 focus:ring-2 w-full"
            />
          </div>
        </div>

        <div>
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
          <button
            disabled={isSubmitting}
            className="bg-gradient-to-r from-yellow-300 to-orange-300 inline-block px-2 py-2 font-semibold rounded-full tracking-wide  hover:from-yellow-400 hover:to-orange-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? `ordering` : `Order now`}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
