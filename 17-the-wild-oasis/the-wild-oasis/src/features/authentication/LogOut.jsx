import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function LogOut() {
  const { logout, isLoggingout } = useLogout();
  return (
    <ButtonIcon disabled={isLoggingout} onClick={logout}>
      {isLoggingout ? <SpinnerMini /> : <HiArrowRightEndOnRectangle />}
    </ButtonIcon>
  );
}

export default LogOut;
