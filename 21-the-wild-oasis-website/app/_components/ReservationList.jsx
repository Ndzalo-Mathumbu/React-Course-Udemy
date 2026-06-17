"use client";

import { Suspense, useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservationCard } from "../_lib/actions";
import Spinner from "./Spinner";

function ReservationList({ bookings }) {
  const [optimState, optimDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  const handleDelete = async function (bookingId) {
    optimDelete(bookingId);
    await deleteReservationCard(bookingId);
  };

  return (
    <ul className="space-y-6">
      {optimState.map((booking) => (
        <>
          {" "}
          <Suspense fallback={<Spinner />}>
            <ReservationCard
              onDelete={handleDelete}
              booking={booking}
              key={booking.id}
            />
          </Suspense>
        </>
      ))}
    </ul>
  );
}

export default ReservationList;
