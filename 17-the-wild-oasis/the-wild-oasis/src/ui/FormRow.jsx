import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  align-items: center;

  gap: 1.6rem;
  padding: 1.4rem 0;

  border-bottom: 1px solid var(--color-grey-100);

  transition: all 0.2s ease;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  &:hover {
    background: var(--color-grey-0);
  }

  &:focus-within {
    transform: translateY(-1px);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 0.8rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--color-grey-700);
  display: block;
`;

const Error = styled.span`
  grid-column: 2 / -1;
  font-size: 1.3rem;
  color: var(--color-red-700);
  margin-top: -0.8rem;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
