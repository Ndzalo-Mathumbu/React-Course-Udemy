import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

const useDeleteGuest = function () {
  const queryClient = useQueryClient();
  const { mutate: deleteGuest, isLoading: isDeletingGuest } = useMutation({
    mutationKey: ["bookings"],
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("Successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteGuest, isDeletingGuest };
};

export default useDeleteGuest;
