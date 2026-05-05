import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

function useUpdateSetting() {
  const { reset } = useForm();
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationKey: ["settings"],
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("New setting updated successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      reset();
    },
    onError: () => toast.error("Could not update settings"),
  });
  return { isUpdating, updateSetting };
}

export default useUpdateSetting;
