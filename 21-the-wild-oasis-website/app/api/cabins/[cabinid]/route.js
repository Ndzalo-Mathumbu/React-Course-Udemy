import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export const GET = async function (request, { params }) {
  const { cabinid } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinid),
      getBookedDatesByCabinId(cabinid),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (err) {
    return Response.json({ message: "Can't find cabin" });
  }
};
// export const POST = async function () {};
