import { useQuery } from "@tanstack/react-query";
import getCabins from "../../services/apiCabins";

// gets cabins from supabase table rows.
function useFetchCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, data: cabins, error };
}

export default useFetchCabins;
