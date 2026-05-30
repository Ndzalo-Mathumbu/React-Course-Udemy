import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import { errorNotification, successNotification } from "../../utils/helpers";

const useDeleteGuest = function () {
  const queryClient = useQueryClient();
  const { mutate: deleteGuest, isLoading: isDeletingGuest } = useMutation({
    mutationKey: ["bookings"],
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      successNotification("Successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => errorNotification(err.message),
  });
  return { deleteGuest, isDeletingGuest };
};

export default useDeleteGuest;
