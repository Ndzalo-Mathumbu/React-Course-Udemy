import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import { errorNotification, successNotification } from "../../utils/helpers";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      successNotification("User account successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => errorNotification(err.message),
  });

  return { updateUser, isUpdating };
}
