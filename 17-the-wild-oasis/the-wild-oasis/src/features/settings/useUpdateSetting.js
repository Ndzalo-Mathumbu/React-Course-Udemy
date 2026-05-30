import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { errorNotification, successNotification } from "../../utils/helpers";

function useUpdateSetting() {
  const { reset } = useForm();
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationKey: ["settings"],
    mutationFn: updateSettingApi,
    onSuccess: () => {
      successNotification("New setting updated successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      reset();
    },
    onError: () => errorNotification("Could not update settings"),
  });
  return { isUpdating, updateSetting };
}

export default useUpdateSetting;
