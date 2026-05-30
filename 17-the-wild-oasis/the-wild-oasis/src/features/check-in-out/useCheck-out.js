import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { errorNotification, successNotification } from "../../utils/helpers";

function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      successNotification(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => errorNotification("An error happend while checking out 😕"),
  });
  return { checkout, isCheckingout };
}

export default useCheckOut;
