import { IoMoonOutline } from "react-icons/io5";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../Context/DarkModeContext";
import { HiOutlineSun } from "react-icons/hi2";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <IoMoonOutline />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
