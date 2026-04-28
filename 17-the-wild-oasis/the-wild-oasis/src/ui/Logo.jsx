import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  z-index: 1;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="../../public/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
