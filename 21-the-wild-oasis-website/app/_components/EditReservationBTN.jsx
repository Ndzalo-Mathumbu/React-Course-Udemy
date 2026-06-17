"use client";

import { useFormStatus } from "react-dom";
// import { useForm } from "react-hook-form";

export const Button = function () {
  const { pending } = useFormStatus();
  /* 
  const {
    reset,
    formState: { isSubmitted },
  } = useForm();
  console.log(isSubmitted);
 */
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? <>Editing...</> : "Edit Reservation"}
    </button>
  );
};
