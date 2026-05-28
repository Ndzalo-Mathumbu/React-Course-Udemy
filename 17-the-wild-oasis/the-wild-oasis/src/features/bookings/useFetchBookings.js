import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

// gets cabins from supabase table rows.
function useFetchBookings() {
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: getBookings,
  });

  return { isLoading, booking, error };
}

export default useFetchBookings;
