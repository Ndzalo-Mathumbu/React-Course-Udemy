import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${({ as }) =>
    as === "h1" &&
    css`
      color: blue;
      font-size: 3rem;
    `}

  ${({ as }) =>
    as === "h2" &&
    css`
      color: #ffb300b1;
      font-size: 2rem;
    `}

    ${({ as }) =>
    as === "h3" &&
    css`
      color: #ff00bb;
      background-color: var(--color-grey-0);
      font-size: 2rem;
    `}
`;

export default Heading;
