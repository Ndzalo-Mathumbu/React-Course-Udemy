"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export const signInAction = async function () {
  await signIn("google", { redirectTo: "/account" });
};
export const signOutAction = async function () {
  await signOut({ redirectTo: "/" });
};

export const UpdateProfile = async function (formData) {
  const session = await auth();
  const regex = /^[a-zA-Z0-9]{6,12}$/;
  if (!session) throw new Error(`You need to login first.`);
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!regex.test(nationalID))
    throw new Error("Kindly provide a valid national ID");

  const updateGuestData = {
    nationality,
    countryFlag,
    nationalID,
  };
  if (!session.user.guestId) {
    throw new Error("Missing guestId in session");
  }
  const { data, error } = await supabase
    .from("guests")
    .update(updateGuestData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");

  return data;
};

export const deleteReservationCard = async function (bookingID) {
  const session = await auth();
  if (!session)
    throw new Error(`You need to be logged in to proceed with this action.`);
  const guestBookings = await getBookings(session?.user?.guestId);
  const guestBookingsIDs = guestBookings.map((a) => a.id);
  if (!guestBookingsIDs.includes(bookingID))
    throw new Error("You are prohibited from deleting this reservation.");
  const { error } = await supabase
    .from("Bookings")
    .delete()
    .eq("id", bookingID);
  /*  .eq("userId", session.user.guestId);
   */
  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservations");
};

export const editReservation = async function (formData) {
  const session = await auth();
  const numGuests = formData.get("numGuests");
  const reservationId = formData.get("reservationId");
  const observations = formData.get("observations").slice(0, 100);
  const editedFields = { numGuests, observations };

  const { error } = await supabase
    .from("Bookings")
    .update(editedFields)
    .eq("id", Number(reservationId))
    .eq("guestId", session.user.guestId);
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  redirect("/account/reservations");
};

export const createBooking = async function (bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error(`You need to login first.`);
  // const { id, ...restbookingData } = bookingData;
  const newBooking = {
    ...bookingData,
    guestId: session?.user?.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 100),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  const { error } = await supabase.from("Bookings").insert([newBooking]);
  // So that the newly created object gets returned!

  if (error) {
    throw new Error("Booking could not be created");
  }
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/appreciation");
};
