import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";

function useCheckIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      successNotification(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/`);
    },
    /*  onError: () => errorNotification("An error happend while checking in 😕"), */
  });
  return { isCheckingIn, checkin };
}

export default useCheckIn;
