import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin, createEditCabin } from "../../../services/apiCabins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { successNotification } from "../../../utils/helpers";

function useCreateEditCabin(onCloseModal) {
  const { reset } = useForm();

  //Create cabin
  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate: createCabin } = useMutation({
    mutationKey: ["cabins"],
    mutationFn: addCabin,
    onSuccess: () => {
      successNotification("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      onCloseModal?.();
      reset();
    },
  });

  //Edit cabin
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationKey: ["cabins"],
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
  });
  return { isEditing, isAdding, editCabin, createCabin };
}

export default useCreateEditCabin;
