import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { successNotification, errorNotification } from "../../utils/helpers";

export const useLogin = function () {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isSigningIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user, "test");

      navigate("/dashboard", { replace: true });
      successNotification("Successfuly signed in");
    },
    onError: (err) => {
      console.log("Error", err);
      errorNotification("Could not sign you in");
    },
  });
  return { login, isSigningIn };
};
