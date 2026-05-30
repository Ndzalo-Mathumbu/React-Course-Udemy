import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { errorNotification, successNotification } from "../../utils/helpers";

const useDeleteCabin = function () {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,

    onSuccess: () => {
      successNotification("Successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => errorNotification(err.message),
  });

  return { isLoading, deleteCabin };
};

export default useDeleteCabin;
