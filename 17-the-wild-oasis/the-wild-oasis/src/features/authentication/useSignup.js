import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { successNotification } from "../../utils/helpers";
// import { useNavigate } from "react-router-dom";

function useSignup() {
  //   const navigate = useNavigate();
  const { mutate: signup, isLoading: isSigninup } = useMutation({
    mutationFn: signupApi,
    mutationKey: ["signup"],
    onSuccess: (user) => {
      console.log(user);
      successNotification(
        "Account successfully created!, kindly verify the new account from the user's email address.",
      );
      /* navigate("/login", { replace: true }); */
    },
  });
  return { signup, isSigninup };
}

export { useSignup };
