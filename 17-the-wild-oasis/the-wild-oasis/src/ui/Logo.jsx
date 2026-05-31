import styled from "styled-components";
import { useDarkMode } from "../Context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  z-index: 1;
`;

/* function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode
    ? "../../public/logo-dark.png"
    : "../../public/logo-light.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

*/

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "./logo-dark.png" : "./logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}
export default Logo;
