import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { successNotification } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading: isLoggingout } = useMutation({
    mutationFn: () => logoutApi(),
    mutationKey: ["logout"],
    onSuccess: () => {
      queryClient.clear();
      successNotification("Successfully logged out");
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoggingout };
}

export { useLogout };
