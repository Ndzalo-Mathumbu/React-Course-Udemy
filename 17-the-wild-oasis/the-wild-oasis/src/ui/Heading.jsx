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
    as === "h2" &&
    css`
      color: #4f46e5;
      background-color: #4e46e533;
      border-radius: 5px;
      font-size: 2rem;
    `}
`;

export default Heading;
